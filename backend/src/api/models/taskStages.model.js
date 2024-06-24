const mongoose = require('mongoose');

const taskStagesSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
    enum: ['TODO', 'IN PROGRESS', 'IN REVIEW', 'DONE'],
  },
});

module.exports = mongoose.model('TaskStages', taskStagesSchema);
