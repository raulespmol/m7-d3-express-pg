const router = require('express').Router()
const postsRoutes = require('./posts/postsRouter')

router.use('/posts', postsRoutes)

module.exports = router