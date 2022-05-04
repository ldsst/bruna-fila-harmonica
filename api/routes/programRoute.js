const { Router } = require('express')
const ProgramController = require('../controllers/ProgramController')

class  ProgramRoute{
    constructor(){
        this.router = Router()
        this.programController = ProgramController
    }

    init(){
        return this.router
        .get('/program', this.programController.getAllPrograms)
        .get('/program/:id', this.programController.getProgram)
        .post('/program', this.programController.createProgram)
        .put('/program/:id', this.programController.updateProgram)
        .delete('/program/:id', this.programController.deleteProgram)
    }
}

module.exports =  ProgramRoute