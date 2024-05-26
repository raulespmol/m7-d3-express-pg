const database = require('../database/config')

const getAll = async () =>{
  const {rows} = await database.query("SELECT * FROM posts")
  return rows
}

const addPost = async (post) => {
  const {titulo, url, descripcion} = post
  const consulta = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *"
  const valores = [titulo, url, descripcion]
  const {rows} = await database.query(consulta, valores)

  return rows
}

const likePost = async (id) => {
  const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *"
  const result = await database.query(consulta, [id])
  return result
} 

const deletePost = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *"
  const result = await database.query(consulta, [id])
  return result
}

const postsModel = {
  getAll,
  addPost,
  likePost,
  deletePost
}

module.exports = postsModel