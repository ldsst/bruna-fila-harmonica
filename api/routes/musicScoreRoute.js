const { Router } = require('express')
const MusicScoreController = require('../controllers/MusicScoreController')

class MusicScoreRoute {
    constructor() {
        this.router = Router()
        this.musicScoreController = new MusicScoreController()
    }

    init() {
        return this.router
            .get('/music_score', this.musicScoreController.getAllMusicScore)
            .get('/music_score/:id', this.musicScoreController.getSpecificScore)
            .post('/music_score', this.musicScoreController.createMusicScore)
            .put('/music_score/:id', this.musicScoreController.updateMusicScore)
            .delete('/music_score/:id', this.musicScoreController.deleteMusicScore)
    }
}

module.exports = MusicScoreRoute