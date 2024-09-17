const jwt = require('jsonwebtoken');

function adminMiddleware(req, res, next) {
  
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    req.username = decoded.username; 
    next();

  } catch (e) {
    res.status(401).json({ error: 'Unauthorized'});
  }
}

module.exports = adminMiddleware;
