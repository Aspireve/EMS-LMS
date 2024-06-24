const BlogModel = require('../models/blog.model');
const ContentModel = require('../models/content.model');

exports.getHeadingBlog = async (req, res, next) => {
  try {
    const headingBlog = await BlogModel.findOne({})
      .limit(1)
      .sort({ views: -1 })
      .populate('author')
      .populate('content');
    return res.status(200).json({ headingBlog });
  } catch (error) {
    return next(error);
  }
};

exports.getAllBlogs = async (req, res, next) => {
  try {
    const { _page, _limit } = req.query;
    const page = parseInt(_page, 10);
    const limit = parseInt(_limit, 10);
    const blogs = await BlogModel.find({})
      .skip(((page || 1) - 1) * limit + 1)
      .populate('author')
      .populate('content')
      .limit(limit)
      .sort({ views: -1 });
    const count = (await BlogModel.countDocuments()) - 1;
    return res.status(200).json({ blogs, count });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleBlog = async (req, res, next) => {
  try {
    const { id } = req.query;
    const blog = await BlogModel.findById(id)
      .populate('author')
      .populate('content');
    return res.status(200).json({ blog });
  } catch (error) {
    return next(error);
  }
};

exports.getBlogByTag = async (req, res, next) => {
  try {
    console.log(req.query);
    const { tag, _page: page } = req.query;
    const filteredBlogs = await BlogModel.find(
      tag ? { tags: { $in: tag } } : {},
    )
      .skip(((page || 1) - 1) * 12)
      .populate('author')
      .populate('content')
      .limit(12)
      .sort({ views: -1 });
    return res.status(200).json({ filteredBlogs });
  } catch (error) {
    return next(error);
  }
};

exports.insertBlog = async (req, res, next) => {
  try {
    const { title, author } = req.body;
    const blog = new BlogModel({
      title,
      author,
    });
    console.log(blog);
    const savedBlog = await blog.save();
    return res
      .status(201)
      .json({ message: 'Blog Saved Successfully', id: savedBlog._id });
  } catch (error) {
    return next(error);
  }
};

exports.updateBlog = async (req, res, next) => {
  try {
    const { id } = req.query;
    console.log(id);
    const { title, author, poster, tags, content } = req.body;
    const contentId = await Promise.all(
      content.map(async (blogContent) => {
        console.log(blogContent);
        const updatedContent = await ContentModel.findByIdAndUpdate(
          blogContent._id,
          blogContent,
          { new: true }
        );
        console.log(updatedContent);
        return updatedContent._id;
      })
    );
    const blog = await BlogModel.findByIdAndUpdate(
      id,
      {
        title,
        author,
        poster,
        tags,
        content: contentId,
      },
      { new: true }
    )
      .populate('content')
      .populate('author');
    return res.status(201).json({ message: 'Blog Saved Successfully', blog });
  } catch (error) {
    return next(error);
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.query;
    console.log(id);
    const data = await BlogModel.findByIdAndDelete(id);
    return res.status(201).json({ message: 'Blog Deleted Successfully', data });
  } catch (error) {
    return next(error);
  }
};

exports.searchBlog = async (req, res, next) => {
  try {
    const { s: search } = req.query;
    const blogs = await BlogModel.find({
      title: { $regex: new RegExp(search, 'i') },
    }).populate('author').populate('content');
    return res.status(200).json({ message: blogs });
  } catch (error) {
    return next(error);
  }
};
