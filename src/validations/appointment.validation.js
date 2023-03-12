import { sub } from 'date-fns';
import Joi from 'joi';
import { GenderEnum } from '../utils/enums.util.js';

const appointmentValidation = (req, res, next) => {
  const appointmentSchema = Joi.object({
    appointment_period: Joi.string()
      .required()
      .empty()
      .pattern(/^([01]\d|2[0-3]):[0-5]\d\s-\s([01]\d|2[0-3]):[0-5]\d$/)
      .messages({
        'any.required': '{{#label}} field is required',
        'string.base': '{{#label}} must be of type string',
        'string.empty': '{{#label}} can not be empty',
        'string.pattern.base': '{{#label}} must be of format "08:00 - 13:30"'
      }),
    _id: Joi.string().required(),
    schedule_id: Joi.string().required(),
    doctor_id: Joi.string().required(),
    client_id: Joi.string().required(),
    drugs: Joi.array().items(Joi.object()),
    recommendations: Joi.array().items(Joi.string())
  });

  // /^(0?[1-9]|1[0-2]):[0-5][0-9]\s*-\s*(0?[1-9]|1[0-2]):[0-5][0-9]$/

  const result = appointmentSchema.validate(req.body);
  if (result.error) {
    res.status(400).json({
      message: result.error.details[0].message.replace(/["'`]+/g, '')
    });
  } else {
    next();
  }
};

const scheduleValidation = (req, res, next) => {
  const appointmentSchema = Joi.object({
    start_date: Joi.string()
      .required()
      .empty()
      .pattern(/^\d{4}-\d{2}-\d{2}$/)
      .messages({
        'any.required': '{{#label}} field is required',
        'string.base': '{{#label}} must be of type string',
        'string.empty': '{{#label}} can not be empty',
        'string.pattern.base': '{{#label}} must be of format "2023-03-21"'
      }),
    end_date: Joi.string()
      .required()
      .empty()
      .pattern(/^\d{4}-\d{2}-\d{2}$/)
      .messages({
        'any.required': '{{#label}} field is required',
        'string.base': '{{#label}} must be of type string',
        'string.empty': '{{#label}} can not be empty',
        'string.pattern.base': '{{#label}} must be of format "2023-03-21"'
      }),
    days: Joi.string().allow(null),
    appointment_duration: Joi.number(),
    doctor_id: Joi.string().required()
  });

  // /^(0?[1-9]|1[0-2]):[0-5][0-9]\s*-\s*(0?[1-9]|1[0-2]):[0-5][0-9]$/

  const result = appointmentSchema.validate(req.body);
  if (result.error) {
    res.status(400).json({
      message: result.error.details[0].message.replace(/["'`]+/g, '')
    });
  } else {
    next();
  }
};

export { appointmentValidation, scheduleValidation };
