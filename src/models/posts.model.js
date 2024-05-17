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

const postsModel = {
  getAll,
  addPost
}

module.exports = postsModel