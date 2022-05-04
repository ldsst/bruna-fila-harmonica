const { MusicianService } = require('../services')
const musicianServices = new MusicianService()
const _ = require('lodash')

const database = require('../models')

class MusicianController {

  static async getAllMusicians(req, res) {
    try {
      const allMusicians = await musicianServices.getAllRecords()
      return res.status(200).json(allMusicians)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getMusician(req, res) {
    const { id } = req.params
    try {
      const Musician = await musicianServices.getOneRecord({ idMusicista: Number(id) })
      return res.status(200).json(Musician)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createMusician(req, res) {
    const newMusician = req.body
    try {
      const newCreatedMusician = await musicianServices.createRecord(newMusician)
      return res.status(200).json(newCreatedMusician)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateMusician(req, res) {
    const { id } = req.params
    const newInformation = req.body
    try {
      await database.Musicista.update(newInformation, { where: { idMusicista: Number(id) } })
      const updatedMusicista = await database.Musicista.findOne({ where: { idMusicista: Number(id) } })
      return res.status(200).json(updatedMusicista)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteMusician(req, res) {
    const { id } = req.params
        try {
            await database.Musicista.destroy({ where: { idMusicista: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} deletado` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MusicianController