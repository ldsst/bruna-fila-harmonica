const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

class PeopleRoute {
    constructor() {
        this.router = Router()
        this.peopleController = new PeopleController()
    }

    init() {
        return this.router
            .get('/people', this.peopleController.getAllPeople)
            .get('/people/:id', this.peopleController.getSpecificPeople)
            .post('/people', this.peopleController.createPeople)
            .put('/people/:id', this.peopleController.updatePeople)
            .delete('/people/:id', this.peopleController.deletePeople)
    }
}

module.exports = PeopleRoute