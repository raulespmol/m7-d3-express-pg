const database = require('../database/config')

const getAll = async () =>{
  const {rows} = await database.query("SELECT * FROM posts")
  return rows
}

const postsModel = {
  getAll
}

module.exports = postsModel