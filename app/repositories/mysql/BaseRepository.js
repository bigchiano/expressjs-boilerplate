class BaseRepository {
    constructor(model) {
      this.Model = model
    }
  
    async save(data) {
      const model = new this.Model(data)
      await model.save()
  
      return model
    }
  
    async find(data, populate = []) {
      const findData = await this.Model.findOne(data).populate(populate).exec()
  
      return findData
    }
  
    async findAll(data, populate = []) {
      const findData = await this.Model.find(data).populate(populate).exec()
  
      return findData
    }
  }
  
  module.exports = BaseRepository