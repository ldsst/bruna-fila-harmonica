const chai = require('chai')
const _ = require('lodash')
const axios = require('axios')

const assert = chai.assert

const baseUrl = `http://localhost:3006`

async function testCreation() {
    try {
        const data = {
            'idCompositor': '1',
            'nomePrograma': 'nomePrograma',
            'efemerides': 'efemerides',
            'observacoes': 'observacoes'
        }

        const program = await axios.post(`${baseUrl}/program`, data)

        if (_.isEmpty(program.data)) {
            assert.fail()
        } else {
            assert.equal(program.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testgetAll() {
    try {
        const listPrograms = await axios.get(`${baseUrl}/program`)

        if (_.isEmpty(listPrograms.data)) {
            assert.fail()
        } else {
            global.testVars.idProgramTest = listPrograms.data.pop().idPrograma
            assert.equal(listPrograms.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testGetOne() {
    try {
        const program = await axios.get(`${baseUrl}/program/${global.testVars.idProgramTest}`)

        if (_.isEmpty(program.data)) {
            assert.fail()
        } else {
            assert.equal(program.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testUpdate() {
    try {
        const data = {
            'idCompositor': '1',
            'nomePrograma': 'nomePrograma',
            'efemerides': 'efemerides',
            'observacoes': 'observacoes'
        }

        const program = await axios.put(`${baseUrl}/program/${global.testVars.idProgramTest}`, data)

        if (_.isEmpty(program.data)) {
            assert.fail()
        } else {
            assert.equal(program.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testDelete() {
    try {
        const program = await axios.delete(`${baseUrl}/program/${global.testVars.idProgramTest}`)

        if (_.isEmpty(program.data)) {
            assert.fail()
        } else {
            assert.equal(program.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}


describe('program Tests', () => {
    it('test Creating test program', testCreation)
    it('test getting the list of programs', testgetAll)
    it('test getting the test program', testGetOne)
    it('test updating test program', testUpdate)
    it('test deleting test program', testDelete)
})