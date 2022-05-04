const chai = require('chai')
const _ = require('lodash')
const axios = require('axios')

const assert = chai.assert

const baseUrl = `http://localhost:3006`

async function testCreation() {
    try {
        const data = {
            'dataEnsaio': new Date().toString(),
            'horaInicio': new Date().toString(),
            'horaFim': new Date().toString(),
            'detalhesEnsaio': 'detalhesEnsaio',
            'duracao': 'duracao',
            'tipo': 'tipo'
        }

        const rehearsal = await axios.post(`${baseUrl}/rehearsal`, data)

        if (_.isEmpty(rehearsal.data)) {
            assert.fail()
        } else {
            assert.equal(rehearsal.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testgetAll() {
    try {
        const listRehearsals = await axios.get(`${baseUrl}/rehearsal`)

        if (_.isEmpty(listRehearsals.data)) {
            assert.fail()
        } else {
            global.testVars.idRehearsalTest = listRehearsals.data.pop().idEnsaio
            assert.equal(listRehearsals.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testGetOne() {
    try {
        const rehearsal = await axios.get(`${baseUrl}/rehearsal/${global.testVars.idRehearsalTest}`)

        if (_.isEmpty(rehearsal.data)) {
            assert.fail()
        } else {
            assert.equal(rehearsal.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testUpdate() {
    try {
        const data = {
            'dataEnsaio': new Date().toString(),
            'horaInicio': new Date().toString(),
            'horaFim': new Date().toString(),
            'detalhesEnsaio': 'detalhesEnsaio',
            'duracao': 'duracao',
            'tipo': 'tipo'
        }

        const rehearsal = await axios.put(`${baseUrl}/rehearsal/${global.testVars.idRehearsalTest}`, data)

        if (_.isEmpty(rehearsal.data)) {
            assert.fail()
        } else {
            assert.equal(rehearsal.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testDelete() {
    try {
        const rehearsal = await axios.delete(`${baseUrl}/rehearsal/${global.testVars.idRehearsalTest}`)

        if (_.isEmpty(rehearsal.data)) {
            assert.fail()
        } else {
            assert.equal(rehearsal.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}


describe('rehearsal Tests', () => {
    it('test Creating test rehearsal', testCreation)
    it('test getting the list of rehearsals', testgetAll)
    it('test getting the test rehearsal', testGetOne)
    it('test updating test rehearsal', testUpdate)
    it('test deleting test rehearsal', testDelete)
})