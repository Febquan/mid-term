const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const myMailer = require("./../utils/mailer");

async function signupController(req, res) {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  try {
    const user = await signUp(username, email, password);
    res.json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
async function autoLoginController(req, res) {
  try {
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
async function LogOutController(req, res) {
  try {
    res.clearCookie("token");
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

async function loginController(req, res) {
  const { userId, password } = req.body;
  try {
    const token = await login(userId, password);
    console.log(token, "sds", process.env.NODE_ENV);
    res.cookie("token", token, {
      secure: process.env.NODE_ENV !== "development",
      // httpOnly: true,
      maxAge: 3600000, // 1 hour in milliseconds
      // sameSite: "strict", // Adjust according to your needs
    });
    res.json({ success: true });
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
}

async function changeInfoController(req, res) {
  const { username, newUserName } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: newUserName,
      },
    });
    if (user) {
      throw new Error("User name already exit !");
    }
    await prisma.user.update({
      where: {
        username,
      },
      data: {
        username: newUserName,
      },
    });
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
const verify = async (req, res, next) => {
  try {
    const hashedUserName = req.query.token;
    const { userName } = await jwt.verify(
      hashedUserName,
      process.env.TOKEN_PRIVATE_KEY
    );

    if (userName) {
      console.log(userName);
      await prisma.user.update({
        where: { username: userName },
        data: { isVerify: true },
      });
      res.status(200).json({ message: "Xác thực Email thành công", ok: true });
    } else {
      const error = new Error("Hệ thống không xác thực được email này !");
      error.statusCode = 400;
      throw error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
module.exports = {
  signupController,
  loginController,
  autoLoginController,
  LogOutController,
  verify,
};

async function signUp(username, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  if (await prisma.user.findFirst({ where: { username } })) {
    throw new Error("User already exist !");
  }
  if (await prisma.user.findFirst({ where: { email } })) {
    throw new Error("Email already used !");
  }
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
  const hashedUserName = await jwt.sign(
    {
      email: email,
      userName: username,
    },
    process.env.TOKEN_PRIVATE_KEY,
    { expiresIn: "8h" }
  );
  myMailer(
    email,
    "Qinterior email verification",
    `<h2>Xin vui lòng click vào <a href="${process.env.BACKEND_URL}/user/verify?&token=${hashedUserName}">đường link này</a> để xác thực mail của bạn</h2>
    `
  );
  return user;
}

async function login(userId, password) {
  let user = await prisma.user.findUnique({
    where: {
      username: userId,
    },
  });
  if (!user) {
    user = await prisma.user.findUnique({
      where: {
        email: userId,
      },
    });
  }

  if (!user) {
    throw new Error("User not found");
  }
  if (!user.isVerify) {
    throw new Error("Account need to be verified");
  }
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    {
      email: user.email,
      userId: user.username,
    },
    process.env.TOKEN_PRIVATE_KEY,
    { expiresIn: "8h" }
  );
  return token;
}
