import { sub } from 'date-fns';
import Joi from 'joi';
import { GenderEnum } from '../utils/enums.util.js';

const loginUserValidation = (req, res, next) => {
  const userSchema = Joi.object({
    email: Joi.string().required().email().empty(),
    password: Joi.string()
      .required()
      .empty()
      .pattern(/^(?=.*[A-Z])(?=.*[0-9])(?!.* ).{8,}$/)
      .messages({
        'any.required': '{{#label}} field is required',
        'string.base': '{{#label}} must be of type string',
        'string.empty': '{{#label}} can not be empty',
        'string.pattern.base':
          '{{#label}} must contain atleast a number, upper-case letter, longer than 8 characters, and no space'
      })
  });

  const result = userSchema.validate(req.body);
  if (result.error) {
    res.status(400).json({
      message: result.error.details[0].message.replace(/["'`]+/g, '')
    });
  } else {
    next();
  }
};

const registerUserValidation = (req, res, next) => {
  const userSchema = Joi.object({
    first_name: Joi.string().required().empty(),
    last_name: Joi.string().required().empty(),
    password: Joi.string()
      .required()
      .empty()
      .pattern(/^(?=.*[A-Z])(?=.*[0-9])(?!.* ).{8,}$/)
      .messages({
        'any.required': '{{#label}} field is required',
        'string.base': '{{#label}} must be of type string',
        'string.empty': '{{#label}} can not be empty',
        'string.pattern.base':
          '{{#label}} must contain atleast a number, upper-case letter, longer than 8 characters, and no space'
      }),
    email: Joi.string().email().required().empty(),
    marital_status: Joi.string().required().empty(),
    country: Joi.string().required().empty(),
    address_1: Joi.string().required().empty(),
    address_2: Joi.string().required().empty(),
    phone_number: Joi.number().required().empty(),
    gender: Joi.any()
      .valid(...GenderEnum)
      .required()
      .empty(),
    id_number: Joi.number().required().empty(),
    birth_date: Joi.date()
      .greater(sub(new Date(), { years: 100 }))
      .message("You can't be 100+ years older")
      .less(new Date())
      .message("Birth Day can't be after today")
      .required()
      .empty()
  });

  const result = userSchema.validate(req.body);
  if (result.error) {
    res.status(400).json({
      message: result.error.details[0].message.replace(/["'`]+/g, '')
    });
  } else {
    return next();
  }
};

export { loginUserValidation, registerUserValidation };
