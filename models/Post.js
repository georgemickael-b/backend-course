const mongoose = require('mongoose');
const User = require('./User');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: User
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
