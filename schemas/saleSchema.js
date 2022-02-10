// REF: validação usando Joi https://www.youtube.com/watch?v=xXjyqcDTkD0
const Joi = require('@hapi/joi');

module.exports = Joi.object({
  productId: Joi.number().required().messages({
    'number.base': '"product_id" must be a number',
    'any.required': '"product_id" is required',
  }),
  quantity: Joi.number().required().messages({
    'number.min': '"quantity" must be a number larger than or equal to 1',
    'number.base': '"quantity" must be a number larger than or equal to 1',
    'any.required': '"quantity" is required',
  }),
});