const mongoose = require('mongoose');

// 1. Create Schema for the model User
const userSchema = new mongoose.Schema({
  //email: String,
  email: {
    type: String, // Validation
    required: true, // Validation Rule
    unique: true // Unique key Constraint
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  interests: [{ type: String }],

  place: {
    type: String,
    default: 'Earth' // NOTE: Not working @George Check
  },
  gender: {
    type: String,
    enum: ['Male', 'Female']
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

// There are Users and users can signin and create accounts
// Users can create a new Post
// Users can view post and then comment on that post

// Nouns - User, Account, Post, Comment
