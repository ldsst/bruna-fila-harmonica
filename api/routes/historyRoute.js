const { Router } = require('express')
const HistoryController = require('../controllers/HistoryController')

class HistorytRoute {
    constructor() {
        this.router = Router()
        this.historyController = new HistoryController()
    }

    init() {
        return this.router
            .get('/history', this.historyController.getAllHistory)
            // TODO: melhorar filtros
            .get('/history/:id', this.historyController.getSpecificHistory)
            .post('/history', this.historyController.createHistory)
            .put('/history/:id', this.historyController.updateHistory)
            .delete('/history/:id', this.historyController.deleteHistory)
    }
}

module.exports = HistorytRoute