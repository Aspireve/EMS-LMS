const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 128,
    },
    author: {
      ref: 'User',
      type: mongoose.Schema.Types.ObjectId,
    },
    poster: {
      type: String,
    },
    tags: {
      type: [String],
    },
    content: [{
      ref: 'Content',
      type: mongoose.Schema.Types.ObjectId,
    }],
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

blogSchema.pre('findOne', async function incrementViews(next) {
  if (this._conditions._id) {
    await this.model.updateOne(
      { _id: this._conditions._id },
      { $inc: { views: 1 } },
      { new: true },
    );
  }
  next();
});

// blogSchema.pre('findOneAndDelete', async function deleteAssociatedContent(next) {
//   try {
//     console.log("lol")
//     console.log(this.content)
//     await ContentModel.deleteMany({
//       _id: { $in: this.content._id },
//     });
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = mongoose.model('Blog', blogSchema);
