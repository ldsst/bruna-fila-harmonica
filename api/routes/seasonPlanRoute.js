const { Router } = require('express')
const SeasonPlanController = require('../controllers/SeasonPlanController')

class SeasonPlanRoute{
    constructor(){
        this.router = Router()
        this.seasonPlanController = SeasonPlanController
    }

    init(){
        return this.router
        .get('/seasonPlan', this.seasonPlanController.getAllSeasonPlans)
        .get('/seasonPlan/:id', this.seasonPlanController.getSeasonPlan)
        .post('/seasonPlan', this.seasonPlanController.createSeasonPlan)
        .put('/seasonPlan/:id', this.seasonPlanController.updateSeasonPlan)
        .delete('/seasonPlan/:id', this.seasonPlanController.deleteSeasonPlan)
    }
}

module.exports =  SeasonPlanRoute