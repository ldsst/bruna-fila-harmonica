const chai = require('chai')
const _ = require('lodash')
const axios = require('axios')

const assert = chai.assert

const baseUrl = `http://localhost:3006`

async function testCreation() {
    try {
        const data = {
            nomeCompleto: "test",
            nomeAbreviado: "test",
            sexo: "t",
            anoNascimento: "2022-03-20",
            anoMorte: "2022-03-20",
            nacionalidade: "test",
            localNascimento: "test",
            localMorte: "test",
            observacoes: "test",
        }

        const songwriter = await axios.post(`${baseUrl}/songwriter`, data)

        console.log(songwriter.data)

        if (_.isEmpty(songwriter.data)) {
            assert.fail()
        } else {
            assert.equal(songwriter.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testgetAll() {
    try {
        const listSongwriters = await axios.get(`${baseUrl}/songwriter`)

        console.log(listSongwriters.data)

        if (_.isEmpty(listSongwriters.data)) {
            assert.fail()
        } else {
            global.testVars.idSongwriterTest = listSongwriters.data.pop().idCompositor
            assert.equal(listSongwriters.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testGetOne() {
    try {
        const songwriter = await axios.get(`${baseUrl}/songwriter/${global.testVars.idSongwriterTest}`)

        if (_.isEmpty(songwriter.data)) {
            assert.fail()
        } else {
            assert.equal(songwriter.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testUpdate() {
    try {
        const data = {
            nomeCompleto: "test",
            nomeAbreviado: "test",
            sexo: "t",
            anoNascimento: "2022-03-20",
            anoMorte: "2022-03-20",
            nacionalidade: "test",
            localNascimento: "test",
            localMorte: "test",
            observacoes: "test",
        }

        const songwriter = await axios.put(`${baseUrl}/songwriter/${global.testVars.idSongwriterTest}`, data)

        if (_.isEmpty(songwriter.data)) {
            assert.fail()
        } else {
            assert.equal(songwriter.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testDelete() {
    try {
        const songwriter = await axios.delete(`${baseUrl}/songwriter/${global.testVars.idSongwriterTest}`)

        if (_.isEmpty(songwriter.data)) {
            assert.fail()
        } else {
            assert.equal(songwriter.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}


describe('songwriter Tests', () => {
    it('test Creating test songwriter', testCreation)
    it('test getting the list of songwriters', testgetAll)
    it('test getting the test songwriter', testGetOne)
    it('test updating test songwriter', testUpdate)
    it('test deleting test songwriter', testDelete)
})