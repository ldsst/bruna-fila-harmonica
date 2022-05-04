const { GuestService } = require('../services')
const guestServices = new GuestService()
const _ = require('lodash')

const database = require('../models')

class GuestController {

  static async getAllGuests(req, res) {
    try {
      const allGuests = await guestServices.getAllRecords()
      return res.status(200).json(allGuests)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getGuest(req, res) {
    const { id } = req.params
    try {
      const Guest = await guestServices.getOneRecord({ idConvidado: Number(id) })
      return res.status(200).json(Guest)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createGuest(req, res) {
    const newGuest = req.body
    try {
      const newCreatedGuest = await guestServices.createRecord(newGuest)
      return res.status(200).json(newCreatedGuest)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateGuest(req, res) {
    const { id } = req.params
    const newInformation = req.body
    try {
      await database.Convidado.update(newInformation, { where: { idConvidado: Number(id) } })
      const updatedConvidado = await database.Convidado.findOne({ where: { idConvidado: Number(id) } })
      return res.status(200).json(updatedConvidado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteGuest(req, res) {
    const { id } = req.params
        try {
            await database.Convidado.destroy({ where: { idConvidado: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} deletado` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = GuestController