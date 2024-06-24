const Course = require('../models/course.model');

exports.create = async (req, res, next) => {
  try {
    const course = new Course(req.body);
    const savedCourse = await course.save();
    return res.json(savedCourse);
  } catch (error) {
    return next(error);
  }
};

exports.getCourse = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    return res.json(course);
  } catch (error) {
    return next(error);
  }
};

exports.updateCourse = async (req, res, next) => {
  try {
    console.log(req.params);
    console.log(req.body)
    const { courseId } = req.params;
    const course = await Course.findByIdAndUpdate(courseId, { $set: req.body }, { new: true });
    return res.json(course);
  } catch (error) {
    return next(error);
  }
};
