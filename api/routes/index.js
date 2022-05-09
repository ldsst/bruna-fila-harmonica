const bodyParser = require('body-parser')
var cors = require('cors')

const History = require('./historyRoute')
const MusicalWork = require('./musicalWorkRoute')
const MusicScore = require('./musicScoreRoute')
const Songwriter = require('./songwriterRoute')
const User = require('./userRoute')
const Program = require('./programRoute')
const SeasonPlan = require('./seasonPlanRoute')
const Guest = require('./guestRoute')
const Rehearsal = require('./rehearsalRoute')
const Concert = require('./concertRoute')
const Musician = require('./musicianRoute')
const People = require('./peopleRoute')

class Router {
    constructor(app) {
        this.app = app
        this.musicalWork = new MusicalWork()
        this.musicScore = new MusicScore()
        this.songwriter = new Songwriter()
        this.user = new User()
        this.history = new History()
        this.program = new Program()
        this.seasonPlan = new SeasonPlan()
        this.guest = new Guest()
        this.rehearsal = new Rehearsal()
        this.concert = new Concert()
        this.musician = new Musician()
        this.people = new People()
        
    }

    init() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());

        this.app.use(this.musicalWork.init());
        this.app.use(this.musicScore.init());
        this.app.use(this.songwriter.init());
        this.app.use(this.user.init());
        this.app.use(this.history.init());
        this.app.use(this.program.init());
        this.app.use(this.seasonPlan.init());
        this.app.use(this.guest.init());
        this.app.use(this.rehearsal.init());
        this.app.use(this.concert.init())
        this.app.use(this.musician.init())
        this.app.use(this.people.init())
    }
}

module.exports = Router
