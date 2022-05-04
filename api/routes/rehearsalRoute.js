const { Router } = require('express')
const RehearsalController = require('../controllers/RehearsalController')

class RehearsalRoute{
    constructor(){
        this.router = Router()
        this.rehearsalController = RehearsalController
    }

    init(){
        return this.router
        .get('/rehearsal', this.rehearsalController.getAllRehearsals)
        .get('/rehearsal/:id', this.rehearsalController.getRehearsal)
        .post('/rehearsal', this.rehearsalController.createRehearsal)
        .put('/rehearsal/:id', this.rehearsalController.updateRehearsal)
        .delete('/rehearsal/:id', this.rehearsalController.deleteRehearsal)
    }
}

module.exports = RehearsalRoute