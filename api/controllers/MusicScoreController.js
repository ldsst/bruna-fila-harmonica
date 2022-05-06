const database = require('../models')

class MusicScoreController {
  async getAllMusicScore(req, res) {
    try {
      const allScores = await database.Partitura.findAll()
      return res.status(200).json(allScores)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async getSpecificScore(req, res) {
    const { id } = req.params
    try {
      const specificScore = await database.Partitura.findOne({
        where: {
          idPartitura: Number(id)
        }
      })
      return res.status(200).json(specificScore)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async createMusicScore(req, res) {
    const newMusicScore = req.body
    try {
      await database.Partitura.create(newMusicScore)
      return res.status(201).json({ message: 'Music Score was created successfully' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async updateMusicScore(req, res) {
    const { id } = req.params
    const newInformationScore = req.body
    try {
      await database.Partitura.update(newInformationScore, { where: { idPartitura: Number(id) } })
      const updatedMusicScore = await database.Partitura.findOne({
        where: { idPartitura: Number(id) }
      })
      return res.status(200).json(updatedMusicScore)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async deleteMusicScore(req, res) {
    const { id } = req.params
    try {
      await database.Partitura.destroy({ where: { idPartitura: Number(id) } })
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = MusicScoreController
