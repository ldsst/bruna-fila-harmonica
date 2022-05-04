const { RehearsalService } = require('../services')
const rehearsalServices = new RehearsalService()
const _ = require('lodash')

const database = require('../models')

class RehearsalController {

  static async getAllRehearsals(req, res) {
    try {
      const allRehearsals = await rehearsalServices.getAllRecords()
      return res.status(200).json(allRehearsals)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getRehearsal(req, res) {
    const { id } = req.params
    try {
      const rehearsal = await rehearsalServices.getOneRecord({ idEnsaio: Number(id) })
      return res.status(200).json(rehearsal)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createRehearsal(req, res) {
    const newRehearsal = req.body
    try {
      const newCreatedRehearsal = await rehearsalServices.createRecord(newRehearsal)
      return res.status(200).json(newCreatedRehearsal)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateRehearsal(req, res) {
    const { id } = req.params
    const newInformation = req.body
    try {
      await database.Ensaio.update(newInformation, { where: { idEnsaio: Number(id) } })
      const updatedRehearsal = await database.Ensaio.findOne({ where: { idEnsaio: Number(id) } })
      return res.status(200).json(updatedRehearsal)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteRehearsal(req, res) {
    const { id } = req.params
        try {
            await database.Ensaio.destroy({ where: { idEnsaio: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} deletado` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = RehearsalController