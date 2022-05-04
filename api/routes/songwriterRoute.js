const { Router } = require('express')
const SongwriterController = require('../controllers/SongwriterController')

class SongwriterRoute {
    constructor() {
        this.router = Router()
        this.songwriterController = SongwriterController
    }

    init() {
        return this.router
            .get('/songwriter', this.songwriterController.getAllSongwriters)
            .get('/songwriter/:id', this.songwriterController.getSongwriter)
            .post('/songwriter', this.songwriterController.createSongwriter)
            .put('/songwriter/:id', this.songwriterController.updateSongwriter)
            .delete('/songwriter/:id', this.songwriterController.deleteSongwriter)
    }
}

module.exports = SongwriterRoute