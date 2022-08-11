const Joi = require('joi').extend(require('@joi/date'));
const moment = require('moment');

const dobValidator = (data) => {
  const schema = Joi.object({
    dob: Joi.date()
      .timestamp('unix')
      .max(moment().valueOf() * 1000)
      .required()
      .messages({
        'any.required': 'Date Of Birth is required',
        'date.max': 'Date of Birth must be less than now.',
      }),
  });

  return schema.validate(data);
};

module.exports.dobValidator = dobValidator;
