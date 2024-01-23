const express = require('express');
const router = express.Router();
const Blog = require('../../models/Blog');

router.post('/open', async (req, res) => {
  console.log("blog server ok!", req.body);
  const {author} = req.body;
  try {
    let blog = await Blog.findOne({ author });
    console.log(blog.content, blog.date);
    if (!res) {
      res.status(400).send("Server error");
    }
    else {
      res.send({content: blog.content, date: blog.date});
    }
  } catch (err) {
    res.status(400).send("Server error");
    // console.error(err.message);
  }
});

router.post('/insert', async (req, res) => {
  console.log("blog server ok!", req.body);
  try {
    let blog = new Blog({
      content: req.body.content,
      author: req.body.author,
      date: req.body.date
    });

    await blog.save();
  } catch (err) {
    console.error("error", err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;