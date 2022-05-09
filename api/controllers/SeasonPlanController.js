const { SeasonPlanService } = require('../services')
const seasonPlanServices = new SeasonPlanService()
const _ = require('lodash')

const database = require('../models')
const { Concerto, PlanoTemporada } = require('../models');

class SeasonPlanController {

  static async getAllSeasonPlans(req, res) {
    try {
      const seasonPlan = await PlanoTemporada.findAll();
  
      return res.status(200).json(seasonPlan);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }


  static async getSeasonPlan(req, res) {
    try {
      const { id } = req.params;
      const seasonPlan = await PlanoTemporada.findOne({where: { idPlanoTemporada: id }});
      return res.status(200).json(seasonPlan);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async createSeasonPlan(req, res) {
      try {
      const { concerto, ...data } = req.body;
      const planoTemporada = await database.PlanoTemporada.create(data);

      if (concerto && concerto.length > 0) {
        planoTemporada.setConcerto(concerto); 
      }
      return res.status(200).json(planoTemporada);
      } catch (error) {
        return res.status(500).json(error.message)
      }
  }

  static async updateSeasonPlan(req, res) {
    try {
      const { id } = req.params;
      const planoTemporada = await PlanoTemporada.findByPk(id);
  
      const { concerto, ...data } = req.body;
      planoTemporada.update(data);
  
      if (concerto && concerto.length > 0) {
        planoTemporada.setConcerto(concerto);
      }
      return res.status(200).json(planoTemporada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteSeasonPlan(req, res) {
    const { id } = req.params
    try {
        await database.PlanoTemporada.destroy({ where: { idPlanoTemporada: Number(id) } })
        return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
        return res.status(500).json(error.message)
    }
  }
}

module.exports = SeasonPlanController