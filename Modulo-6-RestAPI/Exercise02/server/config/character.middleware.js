const characterMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      thumbNailUrl: '/thumbnails/unknown.jpg',
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/characters/create') {
    characterMiddleware(req, res, next);
  } else {
    next();
  }
};
