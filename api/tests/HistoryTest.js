const chai = require('chai')
const _ = require('lodash')
const axios = require('axios')

const assert = chai.assert

const baseUrl = `http://localhost:3006`

async function testCreation() {
    try {
        const data = {
            "primeiroNome": "teste",
            "repertorio": "teste",
            "data": "2022-03-20",
            "serie": "teste",
            "regente": "teste",
            "solista": "teste",
            "cidade": "teste",
            "local": "teste",
            "arranjadorOuOrquestrador": "teste",
            "compositor": "teste"
        }

        const history = await axios.post(`${baseUrl}/history`, data)

        if (_.isEmpty(history.data)) {
            assert.fail()
        } else {
            assert.equal(history.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testgetAll() {
    try {
        const listHistorys = await axios.get(`${baseUrl}/history`)

        if (_.isEmpty(listHistorys.data)) {
            assert.fail()
        } else {
            global.testVars.idHistoryTest = listHistorys.data.pop().idHistorico
            assert.equal(listHistorys.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testGetOne() {
    try {
        const history = await axios.get(`${baseUrl}/history/${global.testVars.idHistoryTest}`)

        if (_.isEmpty(history.data)) {
            assert.fail()
        } else {
            assert.equal(history.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testUpdate() {
    try {
        const data = {
            "primeiroNome": "teste",
            "repertorio": "teste",
            "data": "2022-03-20",
            "serie": "teste",
            "regente": "teste",
            "solista": "teste",
            "cidade": "teste",
            "local": "teste",
            "arranjadorOuOrquestrador": "teste",
            "compositor": "teste"
        }

        const history = await axios.put(`${baseUrl}/history/${global.testVars.idHistoryTest}`, data)

        if (_.isEmpty(history.data)) {
            assert.fail()
        } else {
            assert.equal(history.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testDelete() {
    try {
        const history = await axios.delete(`${baseUrl}/history/${global.testVars.idHistoryTest}`)

        if (_.isEmpty(history.data)) {
            assert.fail()
        } else {
            assert.equal(history.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}


describe('history Tests', () => {
    it('test Creating test history', testCreation)
    it('test getting the list of historys', testgetAll)
    it('test getting the test history', testGetOne)
    it('test updating test history', testUpdate)
    it('test deleting test history', testDelete)
})