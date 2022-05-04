const { ProgramService } = require('../services')
const programServices = new ProgramService()
const _ = require('lodash')

const database = require('../models')
const { Obra, Programa } = require('../models');

class ProgramController {

  static async getAllPrograms(req, res) {
    try {
      const programs = await Programa.findAll({
        include: [
          {
            model: Obra,
            as: 'obra',
            through: { attributes: [] },
          },
        ],
      });
  
      return res.status(200).json(programs);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }


  static async getProgram(req, res) {
    try {
      const { id } = req.params;
      const program = await Programa.findOne({
        where: { idPrograma: id },
        include: [
          { model: Obra, 
            as: 'obra', 
            through: { attributes: [] } 
          }
        ],
      });
      return res.status(200).json(program);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async createProgram(req, res) {
    try {
    const { obra, ...data } = req.body;
    const program = await database.Programa.create(data);

    if (obra && obra.length > 0) {
      program.setObra(obra); 
    }
    return res.status(200).json(program);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateProgram(req, res) {
    try {
      const { id } = req.params;
      const programa = await Programa.findByPk(id);
  
      const { obra, ...data } = req.body;
      programa.update(data);
  
      if (obra && obra.length > 0) {
        programa.setObra(obra);
      }
      return res.status(200).json(programa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteProgram(req, res) {
    const { id } = req.params
    try {
        await database.Programa.destroy({ where: { idPrograma: Number(id) } })
        return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
        return res.status(500).json(error.message)
    }
  }
}

module.exports = ProgramController