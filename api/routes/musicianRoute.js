const { Router } = require('express')
const MusicianController = require('../controllers/MusicianController')

class MusicianRoute{
    constructor(){
        this.router = Router()
        this.MusicianController = MusicianController
    }

    init(){
        return this.router
        .get('/musician', this.MusicianController.getAllMusicians)
        .get('/musician/:id', this.MusicianController.getMusician)
        .post('/musician', this.MusicianController.createMusician)
        .put('/musician/:id', this.MusicianController.updateMusician)
        .delete('/musician/:id', this.MusicianController.deleteMusician)
    }
}

module.exports = MusicianRoute