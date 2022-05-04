const database = require('../models')

class Services {
  constructor(model) {
    this.model = model
  }

  async getAllRecords(where = {}) {
    return database[this.model].findAll({ where: { ...where } })
  }

  async getOneRecord(where = {}) {
    return database[this.model].findOne({ where: { ...where } })
  }

  async createRecord(dados) {
    return database[this.model].create(dados)
  }

  async deleteRecord(id) {
    return database[this.model].destroy({ where: { id: id } })
  }

async updateRecord(dadosAtualizados, id, transacao = {}){
    return database[this.model]
      .update(dadosAtualizados, { where: { id: id } }, transacao)
  }
  
 /*
  async updateRecords(dadosAtualizados, where, transacao = {}){
    return database[this.model]
      .update(dadosAtualizados, { where: { ...where } }, transacao)
  }

  async deleteRecord(id) {
    return database[this.model].destroy({ where: { id: id } })
  }

  async restauraRegistro(id) {
    return database[this.model].restore({ where: { id: id } })
  }

  async consultaRegistroApagado(id) {
    return database[this.model]
      .findOne({ paranoid: false, where: { id: Number(id) } })
  }

  async encontraEContaRegistros(where = {}, agregadores) {
    return database[this.model]
      .findAndCountAll({ where: { ...where }, ...agregadores })
  } */

}

module.exports = Services