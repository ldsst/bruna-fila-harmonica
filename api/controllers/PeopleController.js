const database = require('../models')

class PeopleController {
  async getAllPeople(req, res) {
    try {
      const allPeople = await database.Pessoas.findAll()
      return res.status(200).json(allPeople)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async getSpecificPeople(req, res) {
    const { id } = req.params
    try {
      const specificPeople = await database.Pessoas.findOne({
        where: {
          idPessoas: Number(id)
        }
      })
      return res.status(200).json(specificPeople)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async createPeople(req, res) {
    const newPeople = req.body
    try {
      await database.Pessoas.create(newPeople)
      return res.status(201).json({ message: 'People was created successfully' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async updatePeople(req, res) {
    const { id } = req.params
    const newInformationPeople = req.body
    try {
      await database.Pessoas.update(newInformationPeople, { where: { idPessoas: Number(id) } })
      const updatedPeople = await database.Pessoas.findOne({
        where: { idPessoas: Number(id) }
      })
      return res.status(200).json(updatedPeople)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async deletePeople(req, res) {
    const { id } = req.params
    try {
      await database.Pessoas.destroy({ where: { idPessoas: Number(id) } })
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PeopleController
