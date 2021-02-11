const boom = require('boom');

module.exports = (err, _req, res, _next) => {
  console.log(err);
  if(boom.isBoom(err)) {
    return res.status(err.output.statusCode).json(err.output.payload);
  }
  res.status(500).json({ message: err.message });
}
