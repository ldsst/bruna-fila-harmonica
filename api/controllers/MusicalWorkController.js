const { MusicalWorkService } = require('../services')
const musicalWorkServices = new MusicalWorkService()

const database = require('../models')

class MusicalWorkController {

  static async getAllMusicalWorks(req, res) {
    try {
      const allmusicalWorks = await musicalWorkServices.getAllRecords()
      return res.status(200).json(allmusicalWorks)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getMusicalWork(req, res) {
    const { id } = req.params
    try {
      const musicalWork = await musicalWorkServices.getOneRecord({ idObra: Number(id) })
      return res.status(200).json(musicalWork)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createMusicalWork(req, res) {
    const newmusicalWork = req.body
    try {
      const newCreatedmusicalWork = await musicalWorkServices.createRecord(newmusicalWork)
      return res.status(200).json(newCreatedmusicalWork)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateMusicalWork(req, res) {
    const { id } = req.params
    const newInformation = req.body
    try {
      await database.Obra.update(newInformation, { where: { idObra: Number(id) } })
      const updatedmusicalWork = await database.Obra.findOne({ where: { idObra: Number(id) } })
      return res.status(200).json(updatedmusicalWork)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteMusicalWork(req, res) {
    const { id } = req.params
    try {
        await database.Obra.destroy({ where: { idObra: Number(id) } })
        return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
}

module.exports = MusicalWorkController