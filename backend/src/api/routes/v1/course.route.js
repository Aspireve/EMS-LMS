const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/course.controller');
const {
  authorize,
  ADMIN,
  CREATOR,
  APPROVER,
} = require('../../middlewares/auth');
const {
  createCourse,
  getCourse,
} = require('../../validations/course.validation');

const router = express.Router();

router
  .route('/createCourse')
  .post(
    authorize([ADMIN, CREATOR, APPROVER]),
    validate(createCourse),
    controller.create,
  );

router
  .route('/getCourse/:courseId')
  .get(
    authorize([ADMIN, CREATOR, APPROVER]),
    validate(getCourse),
    controller.getCourse,
  );

router
  .route('/updateCourse/:courseId')
  .put(
    authorize([ADMIN, CREATOR, APPROVER]),
    validate(getCourse),
    controller.updateCourse,
  );

module.exports = router;
