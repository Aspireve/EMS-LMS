const Joi = require('joi');

module.exports = {
  insertBlog: {
    body: {
      title: Joi.string().required().min(6).max(128),
      author: Joi.string().required(),
      poster: Joi.string(),
      tags: Joi.array().items(Joi.string()),
      content: Joi.array()
        .items(
          Joi.alternatives().try(
            Joi.object({
              type: Joi.string(),
              content: Joi.string(),
            }),
            Joi.object({
              type: Joi.string(),
              content: Joi.object({
                url: Joi.string(),
                caption: Joi.string(),
              }),
            }),
          ),
        ),
    },
  },
  getBlog: {
    query: {
      id: Joi.string().required(),
    },
  },
  updateBlog: {
    query: {
      id: Joi.string().required(),
    },
    body: {
      title: Joi.string().required().min(6).max(128),
      author: Joi.string().required(),
      poster: Joi.string(),
      tags: Joi.array().items(Joi.string()).required(),
      content: Joi.array()
        .items(
          Joi.alternatives().try(
            Joi.object({
              type: Joi.string().required(),
              content: Joi.string().required(),
            }),
            Joi.object({
              type: Joi.string().required(),
              content: Joi.object({
                url: Joi.string().required(),
                caption: Joi.string(),
              }),
            }),
          ),
        )
        .required(),
    },
  },
  deleteBlog: {
    query: {
      id: Joi.string().required(),
    },
  },
  searchBlog: {
    query: {
      s: Joi.string(),
    },
  },
  getTags: {
    query: {
      tag: Joi.string(),
      _page: Joi.number(),
    },
  },
};
