const chai = require('chai')
const _ = require('lodash')
const axios = require('axios')


const assert = chai.assert

const baseUrl = `http://localhost:3006`

async function testCreation() {
    try {
        const data = {
            "evento": 'evento',
            "dataInicio": new Date().toString(),
            "dataFim": new Date().toString(),
            "serie": 'serie',
            "numero": '1',
            "traje": 'traje',
            "observacoes": 'observacoes',
            "idPrograma": '1',
            "nomeRegente": 'nomeRegente',
            "nomeSolista": 'nomeSolista',
            "instrumentoSolista": 'instrumentoSolista',
            "editora": 'editora',
            "horario": new Date().toString(),
            "transmissaoOuGravacao": 'transmissaoOuGravacao',
            "duracao": 'duracao',
            "nomeEvento": 'nomeEvento',
            "legenda": 'legenda',
        }

        const concert = await axios.post(`${baseUrl}/concert`, data)

        if (_.isEmpty(concert.data)) {
            assert.fail()
        } else {
            assert.equal(concert.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testgetAll() {
    try {
        const listConcert = await axios.get(`${baseUrl}/concert`)

        if (_.isEmpty(listConcert.data)) {
            assert.fail()
        } else {
            global.testVars.idConcertTest = listConcert.data.pop().idConcerto
            assert.equal(listConcert.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testGetOne() {
    try {
        const concert = await axios.get(`${baseUrl}/concert/${global.testVars.idConcertTest}`)

        if (_.isEmpty(concert.data)) {
            assert.fail()
        } else {
            assert.equal(concert.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testUpdate() {
    try {
        const data = {
            "evento": 'evento',
            "dataInicio": new Date().toString(),
            "dataFim": new Date().toString(),
            "serie": 'serie',
            "numero": '1',
            "traje": 'traje',
            "observacoes": 'observacoes',
            "idPrograma": '1',
            "nomeRegente": 'nomeRegente',
            "nomeSolista": 'nomeSolista',
            "instrumentoSolista": 'instrumentoSolista',
            "editora": 'editora',
            "horario": new Date().toString(),
            "transmissaoOuGravacao": 'transmissaoOuGravacao',
            "duracao": 'duracao',
            "nomeEvento": 'nomeEvento',
            "legenda": 'legenda',
        }

        const concert = await axios.put(`${baseUrl}/concert/${global.testVars.idConcertTest}`, data)

        if (_.isEmpty(concert.data)) {
            assert.fail()
        } else {
            assert.equal(concert.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testDelete() {
    try {
        const concert = await axios.delete(`${baseUrl}/concert/${global.testVars.idConcertTest}`)

        if (_.isEmpty(concert.data)) {
            assert.fail()
        } else {
            assert.equal(concert.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}


describe('concert Tests', () => {
    it('test Creating test concert', testCreation)
    it('test getting the list of concert', testgetAll)
    it('test getting the test concert', testGetOne)
    it('test updating test concert', testUpdate)
    it('test deleting test concert', testDelete)
})