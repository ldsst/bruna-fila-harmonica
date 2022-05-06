const { Router } = require('express')
const MusicScoreController = require('../controllers/MusicScoreController')

class MusicScoreRoute {
  constructor() {
    this.router = Router()
    this.musicScoreController = new MusicScoreController()
  }

  init() {
    return this.router
      .get('/musicScore', this.musicScoreController.getAllMusicScore)
      .get('/musicScore/:id', this.musicScoreController.getSpecificScore)
      .post('/musicScore', this.musicScoreController.createMusicScore)
      .put('/musicScore/:id', this.musicScoreController.updateMusicScore)
      .delete('/musicScore/:id', this.musicScoreController.deleteMusicScore)
  }
}

module.exports = MusicScoreRoute
