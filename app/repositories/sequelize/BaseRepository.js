class BaseRepository {
  constructor(model) {
    this.Model = model
  }

  async save(data) {
    return await this.Model.create(data)
  }

  async update(query, data) {
    return await this.Model.update(data, { where: query })
  }

  async find(query, includes = [], attributes) {
    return await this.Model.findOne({ where: query, includes, attributes })
  }

  async findAll(query, includes = [], attributes) {
    return await this.Model.findAll({ where: query, includes, attributes })
  }

  async delete(query) {
    return await this.Model.destroy({ where: query })
  }
}

module.exports = BaseRepository
