const { Router } = require('express')
const ConcertController = require('../controllers/ConcertController')

class ConcertRoute{
    constructor(){
        this.router = Router()
        this.concertController = ConcertController
    }

    init(){
        return this.router
        .get('/concert', this.concertController.getAllConcerts)
        .get('/concert/:id', this.concertController.getConcert)
        .post('/concert', this.concertController.createConcert)
        .put('/concert/:id', this.concertController.updateConcert)
        .delete('/concert/:id', this.concertController.deleteConcert)
    }
}

module.exports = ConcertRoute