const postsRouter = require('express').Router()
const postsModel = require('../../models/posts.model')

postsRouter.get('/', async (req, res) => {
  try {
    const posts = await postsModel.getAll()
    res.json(posts)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: "Internal server error"})
  }
})

module.exports = postsRouter