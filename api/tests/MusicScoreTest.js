const chai = require('chai')
const _ = require('lodash')
const axios = require('axios')

const assert = chai.assert

const baseUrl = `http://localhost:3006`

async function testCreation() {
    try {
        const data = {
            numeroTombo: "teste",
            compositor: "teste",
            nomeObra: "teste",
            editoraPartitura: "teste",
            duracao: 1,
            instrumentacao: "teste",
            movimentos: "teste",
            historicoObra: "teste",
            observacoes: "teste",
        }

        const musicScore = await axios.post(`${baseUrl}/music_score`, data)

        if (_.isEmpty(musicScore.data)) {
            assert.fail()
        } else {
            assert.equal(musicScore.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testgetAll() {
    try {
        const listMusicScores = await axios.get(`${baseUrl}/music_score`)

        if (_.isEmpty(listMusicScores.data)) {
            assert.fail()
        } else {
            global.testVars.idMusicSocreTest = listMusicScores.data.pop().idPartitura
            assert.equal(listMusicScores.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testGetOne() {
    try {
        const musicScore = await axios.get(`${baseUrl}/music_score/${global.testVars.idMusicSocreTest}`)

        if (_.isEmpty(musicScore.data)) {
            assert.fail()
        } else {
            assert.equal(musicScore.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testUpdate() {
    try {
        const data = {
            numeroTombo: "teste",
            compositor: "teste",
            nomeObra: "teste",
            editoraPartitura: "teste",
            duracao: 1,
            instrumentacao: "teste",
            movimentos: "teste",
            historicoObra: "teste",
            observacoes: "teste",
        }

        const musicScore = await axios.put(`${baseUrl}/music_score/${global.testVars.idMusicSocreTest}`, data)

        if (_.isEmpty(musicScore.data)) {
            assert.fail()
        } else {
            assert.equal(musicScore.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testDelete() {
    try {
        const musicScore = await axios.delete(`${baseUrl}/music_score/${global.testVars.idMusicSocreTest}`)

        if (_.isEmpty(musicScore.data)) {
            assert.fail()
        } else {
            assert.equal(musicScore.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}


describe('musicScore Tests', () => {
    it('test Creating test musicScore', testCreation)
    it('test getting the list of musicScores', testgetAll)
    it('test getting the test musicScore', testGetOne)
    it('test updating test musicScore', testUpdate)
    it('test deleting test musicScore', testDelete)
})