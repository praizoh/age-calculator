const joiMiddleware = (schema) => (req, res, next) => {
  const { error } = schema(req.query);
  const valid = error == null;
  if (valid) {
    return next();
  }
  const { details } = error;
  const message = details.map((i) => i.message).join(',');
  return res.status(400).send({
    status: 400,
    error: message,
    age: null,
  });
};
module.exports = joiMiddleware;
