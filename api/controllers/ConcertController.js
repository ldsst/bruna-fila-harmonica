const { ConcertService } = require('../services')
const concertServices = new ConcertService()
const _ = require('lodash')

const database = require('../models')
const { Ensaio, Concerto } = require('../models');

class ConcertController {

  static async getAllConcerts(req, res) {
    try {
      const concerts = await Concerto.findAll({
        include: [
          {
            model: Ensaio,
            as: 'ensaio',
            through: { attributes: [] },
          },
        ],
      });
  
      return res.status(200).json(concerts);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  static async getConcert(req, res) {
    try {
      const { id } = req.params;
      const concert = await Concerto.findOne({
        where: { idConcerto: id },
        include: [
          { model: Ensaio, 
            as: 'ensaio', 
            through: { attributes: [] } 
          }
        ],
      });
      return res.status(200).json(concert);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createConcert(req, res) {
    try {
      const { ensaio, ...data } = req.body;
      const concert = await database.Concerto.create(data);
  
      if (ensaio && ensaio.length > 0) {
        concert.setEnsaio(ensaio); 
      }
      return res.status(200).json(concert);
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

  static async updateConcert(req, res) {
    try {
      const { id } = req.params;
      const concerto = await Concerto.findByPk(id);
  
      const { ensaio, ...data } = req.body;
      concerto.update(data);
  
      if (ensaio && ensaio.length > 0) {
        concerto.setEnsaio(ensaio);
      }
      return res.status(200).json(concerto)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteConcert(req, res) {
    const { id } = req.params
    try {
        await database.Concerto.destroy({ where: { idConcerto: Number(id) } })
        return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }
}

module.exports = ConcertController