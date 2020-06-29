
const logTrafic = (req, res, next) => {
  console.log({
    method: req.method,
    endpoint: req.originalUrl,
  });
  next();
}

module.exports = {
  logTrafic,
}