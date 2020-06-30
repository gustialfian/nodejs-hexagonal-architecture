
const aMiddleware = (req, res, next) => {
  console.log('a');
  next();
}

const bMiddleware = (req, res, next) => {
  console.log('b');
  next();
}

module.exports = {
  aMiddleware,
  bMiddleware,
}