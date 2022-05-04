const database = require('../models')

class HistoryController {
    async getAllHistory(req, res) {
        try {
            const allHistory = await database.Historico.findAll()
            return res.status(200).json(allHistory)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    // TODO: refatorar para receber mais parametros de busca

    async getSpecificHistory(req, res) {
        const { id } = req.params
        try {
            const specificHistory = await database.Historico.findOne({
                where: {
                    idHistorico: Number(id)
                }
            })
            return res.status(200).json(specificHistory)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async createHistory(req, res) {
        const newHistory = req.body
        try {
            const newHistoryCreated = await database.Historico.create(newHistory)
            return res.status(200).json(newHistoryCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async updateHistory(req, res) {
        const { id } = req.params
        const newInformationHistory = req.body
        try {
            await database.Historico.update(newInformationHistory, { where: { idHistorico: Number(id) } })
            const updatedHistory = await database.Historico.findOne({ where: { idHistorico: Number(id) } })
            return res.status(200).json(updatedHistory)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    async deleteHistory(req, res) {
        const { id } = req.params
        try {
            await database.Historico.destroy({ where: { idHistorico: Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} deletado` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = HistoryController