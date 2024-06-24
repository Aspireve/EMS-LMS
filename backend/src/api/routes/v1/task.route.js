const express = require('express');
const { authorize, ADMIN } = require('../../middlewares/auth');
const controller = require('../../controllers/task.controller');

const router = express.Router();

router.route('/tasks').get(authorize(ADMIN), controller.tasks);

router.route('/taskStages').get(authorize(ADMIN), controller.taskStages);

module.exports = router;
