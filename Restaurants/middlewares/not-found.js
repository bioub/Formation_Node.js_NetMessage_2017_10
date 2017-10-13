module.exports = (req, res, next) => {
  res.statusCode = 404;
  return res.json({
    msg: req.errorMsg || 'Not found',
  });
};
