const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/blog.controller');
const {
  authorize,
  ADMIN,
  CREATOR,
  APPROVER,
  LOGGED_USER,
  INTERN,
  VERIFIER,
} = require('../../middlewares/auth');
const {
  insertBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  searchBlog,
} = require('../../validations/blog.validation');

const router = express.Router();

router
  .route('/getAllBlogs')
  .get(
    authorize([ADMIN, CREATOR, APPROVER, INTERN, VERIFIER, LOGGED_USER]),
    controller.getAllBlogs,
  );

router
  .route('/getHeaderBlogs')
  .get(
    authorize([ADMIN, CREATOR, APPROVER, INTERN, VERIFIER, LOGGED_USER]),
    controller.getHeadingBlog,
  );

router
  .route('/insertBlog')
  .post(
    authorize([ADMIN, CREATOR, APPROVER]),
    validate(insertBlog),
    controller.insertBlog,
  );

router
  .route('/getBlog')
  .get(
    authorize([ADMIN, CREATOR, APPROVER, INTERN, VERIFIER, LOGGED_USER]),
    validate(getBlog),
    controller.getSingleBlog,
  );

router
  .route('/updateBlog')
  .put(
    authorize([ADMIN, CREATOR, APPROVER]),
    validate(updateBlog),
    controller.updateBlog,
  );

router
  .route('/deleteBlog')
  .delete(
    authorize([ADMIN, CREATOR, APPROVER]),
    validate(deleteBlog),
    controller.deleteBlog,
  );

router
  .route('/search')
  .get(
    authorize([ADMIN, CREATOR, APPROVER, INTERN, VERIFIER, LOGGED_USER]),
    validate(searchBlog),
    controller.searchBlog,
  );

router
  .route('/tags')
  .get(
    authorize([ADMIN, CREATOR, APPROVER, INTERN, VERIFIER, LOGGED_USER]),
    validate(searchBlog),
    controller.getBlogByTag,
  );

module.exports = router;
