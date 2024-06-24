const mongoose = require('mongoose');

const categories = ['Training', 'Certification', 'Compliance'];

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      enum: categories,
    },
    attachments: {
      type: [{
        name: String,
        url: String,
      }],
    },
    assignedRoles: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Course', courseSchema);
