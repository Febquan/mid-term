const jwt = require("jsonwebtoken");
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_PRIVATE_KEY);
    return decoded;
  } catch (error) {
    return null;
  }
}
function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    const error = new Error("Unauthorized");
    error.statusCode = 401;
    // No token found, proceed to the next middleware/route
    throw error;
  }

  const decoded = verifyToken(token);
  console.log(decoded);

  if (!decoded) {
    const error = new Error("Token Unauthorized");
    error.statusCode = 401;
    throw error;
    // Token is invalid, proceed to the next middleware/route
  }

  req.user = { userId: decoded.userId };
  next();
}

module.exports = authMiddleware;
