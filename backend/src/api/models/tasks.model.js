const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  stageId: {
    type: String,
    enum: ['TODO', 'IN PROGRESS', 'IN REVIEW', 'DONE'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

/**
 * @typedef Task
 */
module.exports = mongoose.model('Task', taskSchema);
