const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
  const newPostDetailsInReq = req.body;
  const newPost = new Post();
  try {
    newPost.title = newPostDetailsInReq.title;
    newPost.content = newPostDetailsInReq.content;
    // The below will change when we introduce authentication
    newPost.createdBy = newPostDetailsInReq.createdBy;
    await newPost.save();
  } catch (e) {
    res.status(400).send(e);
  }
  res.send(newPost);
});

/*
router.get('/', (req, res) => {
  res.send(posts);
});
*/

module.exports = router;
