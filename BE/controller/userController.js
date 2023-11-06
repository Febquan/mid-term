const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

async function signupController(req, res) {
  const { username, email, password } = req.body;

  try {
    const user = await signUp(username, email, password);
    res.json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
// async function autoLoginController(req, res) {
//   const { username, email, password } = req.body;

//   try {
//     const user = await signUp(username, email, password);
//     res.json({ success: true, user });
//   } catch (error) {
//     res.status(400).json({ success: false, error: error.message });
//   }
// }

async function loginController(req, res) {
  const { username, password } = req.body;
  try {
    const token = await login(username, password);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000, // 1 hour in milliseconds
      sameSite: "strict", // Adjust according to your needs
    });
    res.json({ success: true });
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
}

module.exports = {
  signupController,
  loginController,
};

async function signUp(username, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  if (await prisma.user.findFirst({ where: { username } })) {
    throw new Error("User already exist !");
  }
  if (await prisma.user.findFirst({ where: { email } })) {
    throw new Error("Enmail already used !");
  }
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return user;
}

async function login(username, password) {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    throw new Error("User not found");
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
