function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
}
function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ success: false, error: "Unauthorized" });
    return next(); // No token found, proceed to the next middleware/route
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    res.status(401).json({ success: false, error: "Token Unauthorized" });
    return next(); // Token is invalid, proceed to the next middleware/route
  }

  req.user = { userId: decoded.userId };
  next();
}

module.exports = authMiddleware;
