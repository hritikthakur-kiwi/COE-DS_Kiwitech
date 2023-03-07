/**
 * @file This file define the validation used in auth routes.
 */
import Joi from 'joi';

export const blog = {
  add: {
    body: Joi.object().keys({
    title: Joi.string().required().trim(),
    image: Joi.string().trim(),
    content: Joi.string().required().trim(),
    metaTitle: Joi.string().trim(),
    metaDescription: Joi.string().trim(),
}),
},
update: {
    body: Joi.object().keys({
    title: Joi.string().required().trim(),
    image: Joi.string().trim(),
    content: Joi.string().required().trim(),
    metaTitle: Joi.string().trim(),
    metaDescription: Joi.string().trim(),
})
},
};
