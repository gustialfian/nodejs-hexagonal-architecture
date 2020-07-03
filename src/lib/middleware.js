
const aMiddleware = (req, res, next) => {
  console.log('global middleware a');
  next();
}

const bMiddleware = (req, res, next) => {
  console.log('global middleware b');
  next();
}

module.exports = {
  aMiddleware,
  bMiddleware,
}