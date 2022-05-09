const { SongwriterService } = require('../services')
const songwriterServices = new SongwriterService()
const database = require('../models')

class SongwriterController {

  static async getAllSongwriters(req, res) {
    try {
      const allSongwriters = await songwriterServices.getAllRecords()
      return res.status(200).json(allSongwriters)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getSongwriter(req, res) {
    const { id } = req.params
    try {
      // const songwriter = await songwriterServices.getOneRecord({ id })
      const songwriter = await database.Compositor.findOne({ where: { idCompositor: Number(id) } })
      return res.status(200).json(songwriter)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createSongwriter(req, res) {
    const newSongwriter = req.body
    try {
      const newCreatedSongwriter = await songwriterServices.createRecord(newSongwriter)
      return res.status(200).json(newCreatedSongwriter)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateSongwriter(req, res) {
    const { id } = req.params
    const newInformation = req.body
    try {
      await database.Compositor.update(newInformation, { where: { idCompositor: Number(id) } })
      const updatedSongwriter = await database.Compositor.findOne({ where: { idCompositor: Number(id) } })
      return res.status(200).json(updatedSongwriter)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteSongwriter(req, res) {
    const { id } = req.params
    try {
      await database.Compositor.destroy({ where: { idCompositor: id } })
      return res.status(200).json({ mensagem: `compositor do ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraSongwriter(req, res) {
    const { id } = req.params
    try {
      const registroRestaurado = await songwriterServices
        .restauraRegistro(Number(id))
      return res.status(200).json(registroRestaurado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = SongwriterController