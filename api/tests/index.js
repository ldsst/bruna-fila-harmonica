global.testVars = {
    idUserTest: null,
    idConcertTest: null,
    idHistoryTest: null,
    idMusicSocreTest: null,
    idSongwriterTest: null,
    idGuestTest: null,
    idMusicalWorkTest: null,
    idProgramTest: null,
    idRehearsalTest: null,
    idSeasonPlanTest: null
}


require('./UserTest')
require('./HistoryTest')
require('./MusicScoreTest')
require('./SongwriterTest')
require('./ConcertTest')
require('./GuestTest')
require('./MusicalWorkTest')
require('./ProgramTest')
require('./RehearsalTest')
require('./SeasonPlanTest')

/**
 * ANOTAÇÕES:
 * 
 * Problemas relacionados ao id do compositor nas rotas de get por id, update e delete
 * 
 * 
 * 
 */