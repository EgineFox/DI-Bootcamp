const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string()
})