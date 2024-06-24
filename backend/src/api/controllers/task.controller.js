const Task = require('../models/tasks.model');
const TaskStages = require('../models/taskStages.model');

exports.tasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    console.log(tasks);
    console.log('safely sent');
    return res
      .status(200)
      .json(tasks);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.taskStages = async (req, res) => {
  try {
    const taskStages = await TaskStages.find();
    console.log(taskStages);
    console.log('safely sent');
    return res
      .status(200)
      .json(taskStages);
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
