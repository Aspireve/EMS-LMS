const Joi = require('joi');

module.exports = {
  createCourse: {
    body: {
      title: Joi.string().required().min(3).max(128),
    },
  },
  getCourse: {
    params: {
      courseId: Joi.string().required(),
    },
  },
};
