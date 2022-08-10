const Joi = require("joi").extend(require("@joi/date"));

const dobValidator = data => {
  const schema = Joi.object({
    dob: Joi.date().format("YYYY-MM-DD").utc().max("now").required().messages({
      "any.required": "Date Of Birth is required",
      "date.max": "Date of Birth must be less than now.",
    })
  });

  return schema.validate(data);
}

module.exports.dobValidator = dobValidator;
