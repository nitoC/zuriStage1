import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    age: Joi.number().integer()
        .greater(10).allow(null)

})

export default schema;