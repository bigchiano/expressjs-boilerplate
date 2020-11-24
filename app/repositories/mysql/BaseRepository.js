const db = require('../../models')
class BaseRepository {
    constructor(model) {
      this.Model = model
    }
  
    async save(data) {
      const model = await db[this.Model].create(data)
  
      return model
    }
  
    async update(data, query) {
      const model = await db[this.Model].update(data, { where: query })
  
      return model
    }
  
    async find(data, populate = []) {
      const findData = await db[this.Model].findOne(data)
  
      return findData
    }
  
    async findAll(query, populate = []) {
      const findData = await db[this.Model].findAll({ where: query })
  
      return findData
    }
      
    async delete(query) {
      const deleteData = await db[this.Model].destroy({ where: query })
  
      return deleteData
    }
  }
  
  module.exports = BaseRepository