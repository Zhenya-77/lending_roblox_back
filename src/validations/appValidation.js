import { Joi, Segments } from 'celebrate';

export const bodySchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(2).required().trim(),
    contact: Joi.alternatives()
      .try(Joi.string().email(), Joi.string().pattern(/^\+[1-9]\d{7,14}$/))
      .required(),
    age: Joi.number().required().integer().min(12),
    source: Joi.string().valid('roblox', 'design-course').required(),
  }),
};
