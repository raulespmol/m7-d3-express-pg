const postsRouter = require('express').Router()
const { getPostsController, addPostController } = require('../../controllers/postsController')

postsRouter.get('/', getPostsController)
postsRouter.post('/', addPostController)

module.exports = postsRouter