const {getPost} = require('../models/posts.model')

const checkPostID = async (req, res, next) => {
  const { id } = req.params
  try {
      await getPost(id)
      next()
  } catch (error) {
      res.status(404).send("No se consiguió ningún viaje con este id")
  }
}

module.exports = checkPostID