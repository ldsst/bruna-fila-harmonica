const chai = require('chai')
const _ = require('lodash')
const axios = require('axios')

const assert = chai.assert

const baseUrl = `http://localhost:3006`

async function testCreation() {
    try {
        const data = {
            'nome': 'nome',
            'instrumento': 'instrumento',
            'email': 'email',
            'dataNascimento': new Date().toString(),
            'localNascimento': 'localNascimento',
            'nacionalidade': 'nacionalidade',
            'sexo': 'sexo',
            'isRegente': 'isRegente',
        }

        const guest = await axios.post(`${baseUrl}/guest`, data)

        if (_.isEmpty(guest.data)) {
            assert.fail()
        } else {
            assert.equal(guest.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testgetAll() {
    try {
        const listGuests = await axios.get(`${baseUrl}/guest`)

        if (_.isEmpty(listGuests.data)) {
            assert.fail()
        } else {
            global.testVars.idGuestTest = listGuests.data.pop().idConvidado
            assert.equal(listGuests.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testGetOne() {
    try {
        const guest = await axios.get(`${baseUrl}/guest/${global.testVars.idGuestTest}`)

        if (_.isEmpty(guest.data)) {
            assert.fail()
        } else {
            assert.equal(guest.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testUpdate() {
    try {
        const data = {
            'nome': 'nome',
            'instrumento': 'instrumento',
            'email': 'email',
            'dataNascimento': new Date().toString(),
            'localNascimento': 'localNascimento',
            'nacionalidade': 'nacionalidade',
            'sexo': 'sexo',
            'isRegente': 'isRegente',
        }

        const guest = await axios.put(`${baseUrl}/guest/${global.testVars.idGuestTest}`, data)

        if (_.isEmpty(guest.data)) {
            assert.fail()
        } else {
            assert.equal(guest.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testDelete() {
    try {
        const guest = await axios.delete(`${baseUrl}/guest/${global.testVars.idGuestTest}`)

        if (_.isEmpty(guest.data)) {
            assert.fail()
        } else {
            assert.equal(guest.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}


describe('guest Tests', () => {
    it('test Creating test guest', testCreation)
    it('test getting the list of guests', testgetAll)
    it('test getting the test guest', testGetOne)
    it('test updating test guest', testUpdate)
    it('test deleting test guest', testDelete)
})