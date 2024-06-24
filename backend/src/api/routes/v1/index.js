const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const taskRoutes = require('./task.route');
const courseRoutes = require('./course.route');
const blogRoutes = require('./blog.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));
router.use('/tasks', taskRoutes);
router.use('/course', courseRoutes);
router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
