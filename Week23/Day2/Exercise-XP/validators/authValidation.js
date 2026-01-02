const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.alphanum': 'Username must contain only letters and numbers',
            'string.min': 'Username must be at least 3 characters long',
            'string.max': 'Username must not exceed 30 characters',
            'any.required': 'Username is required'
        }),

    password: Joi.string()
        .min(8)
        .max(128)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]'))
        .required()
        .messages({
            'string.min': 'Password must be at least 8 characters long',
            'string.max': 'Password must not exceed 128 characters',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)',
            'any.required': 'Password is required'
        })
});

const loginSchema = Joi.object({
    username: Joi.string()
        .required()
        .messages({
            'any.required': 'Username is required'
        }),

    password: Joi.string()
        .required()
        .messages({
            'any.required': 'Password is required'
        })
});

const updateProfileSchema = Joi.object({
    email: Joi.string()
        .email()
        .optional()
        .messages({
            'string.email': 'Please provide a valid email address'
        }),

    fullName: Joi.string()
        .min(2)
        .max(100)
        .optional()
        .messages({
            'string.min': 'Full name must be at least 2 characters long',
            'string.max': 'Full name must not exceed 100 characters'
        }),

    bio: Joi.string()
        .max(500)
        .optional()
        .allow('')
        .messages({
            'string.max': 'Bio must not exceed 500 characters'
        }),

    avatar: Joi.string()
        .uri()
        .optional()
        .allow('')
        .messages({
            'string.uri': 'Avatar must be a valid URL'
        })
}).min(1).messages({
    'object.min': 'At least one field must be provided for update'
});


const validateRegister = (data) => {
    return registerSchema.validate(data, { abortEarly: false });
};

const validateLogin = (data) => {
    return loginSchema.validate(data, { abortEarly: false });
};

const validateUpdateProfile = (data) => {
    return updateProfileSchema.validate(data, { abortEarly: false });
};

module.exports = {
    validateLogin,
    validateRegister,
    validateUpdateProfile
};