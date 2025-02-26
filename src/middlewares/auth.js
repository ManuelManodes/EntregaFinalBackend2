export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ error: 'Access denied' });
};

export const isUser = (req, res, next) => {
  if (req.user && req.user.role === 'user') {
    return next();
  }
  return res.status(403).json({ error: 'Access denied' });
};