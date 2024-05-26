const postsRouter = require('express').Router()
const { getPostsController, addPostController, deletePostController, likePostController } = require('../../controllers/postsController')

postsRouter.get('/', getPostsController)
postsRouter.post('/', addPostController)
postsRouter.put('/like/:id', likePostController)
postsRouter.delete('/:id', deletePostController)

module.exports = postsRouter