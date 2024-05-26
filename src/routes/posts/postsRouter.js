const postsRouter = require('express').Router()
const { getPostsController, addPostController, deletePostController, likePostController } = require('../../controllers/postsController')
const checkPostID = require('../../middlewares/checkPost')

postsRouter.get('/', getPostsController)
postsRouter.post('/', addPostController)
postsRouter.put('/like/:id', checkPostID, likePostController)
postsRouter.delete('/:id', checkPostID, deletePostController)

module.exports = postsRouter