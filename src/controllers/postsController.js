const postsModel = require('../models/posts.model')

const getPostsController = async (req, res) => {
  try {
    const posts = await postsModel.getAll()
    res.json(posts)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: "Internal server error"})
  }
}

const addPostController = async (req, res) => {
  const newPost = req.body
  try {
    const post = await postsModel.addPost(newPost)
    res.json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: "Internal server error"})
  }
}

module.exports = {
  getPostsController,
  addPostController
}