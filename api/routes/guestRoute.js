const { Router } = require('express')
const GuestController = require('../controllers/GuestController')

class GuestRoute{
    constructor(){
        this.router = Router()
        this.guestController = GuestController
    }

    init(){
        return this.router
        .get('/guest', this.guestController.getAllGuests)
        .get('/guest/:id', this.guestController.getGuest)
        .post('/guest', this.guestController.createGuest)
        .put('/guest/:id', this.guestController.updateGuest)
        .delete('/guest/:id', this.guestController.deleteGuest)
    }
}

module.exports = GuestRoute