const { Router } = require('express')
const MusicalWorkController = require('../controllers/MusicalWorkController')

class MusicalWorkRoute{
    constructor(){
        this.router = Router()
        this.musicalWorkController = MusicalWorkController
    }

    init(){
        return this.router
        .get('/musicalWork', this.musicalWorkController.getAllMusicalWorks)
        .get('/musicalWork/:id', this.musicalWorkController.getMusicalWork)
        .post('/musicalWork', this.musicalWorkController.createMusicalWork)
        .put('/musicalWork/:id', this.musicalWorkController.updateMusicalWork)
        .delete('/musicalWork/:id', this.musicalWorkController.deleteMusicalWork)
    }
}

module.exports = MusicalWorkRoute