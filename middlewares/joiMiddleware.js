const middleware = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      console.log(details);
      const message = details.map((i) => i.message).join(",");
      return res.status(400).send({message})
    }
  };
};
module.exports = middleware;
