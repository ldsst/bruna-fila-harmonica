const chai = require('chai')
const _ = require('lodash')
const axios = require('axios')

const assert = chai.assert

const baseUrl = `http://localhost:3006`

async function testCreation() {
    try {
        const data = {
            'anoTemporada': '1',
            'nomeTemporada': 'nomeTemporada',
            'observacoes': 'observacoes'
        }

        const seasonPlan = await axios.post(`${baseUrl}/seasonPlan`, data)

        if (_.isEmpty(seasonPlan.data)) {
            assert.fail()
        } else {
            assert.equal(seasonPlan.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testgetAll() {
    try {
        const listSeasonPlans = await axios.get(`${baseUrl}/seasonPlan`)

        if (_.isEmpty(listSeasonPlans.data)) {
            assert.fail()
        } else {
            global.testVars.idSeasonPlanTest = listSeasonPlans.data.pop().idPlanoTemporada
            assert.equal(listSeasonPlans.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testGetOne() {
    try {
        const seasonPlan = await axios.get(`${baseUrl}/seasonPlan/${global.testVars.idSeasonPlanTest}`)

        if (_.isEmpty(seasonPlan.data)) {
            assert.fail()
        } else {
            assert.equal(seasonPlan.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testUpdate() {
    try {
        const data = {
            'anoTemporada': '1',
            'nomeTemporada': 'nomeTemporada',
            'observacoes': 'observacoes'
        }

        const seasonPlan = await axios.put(`${baseUrl}/seasonPlan/${global.testVars.idSeasonPlanTest}`, data)

        if (_.isEmpty(seasonPlan.data)) {
            assert.fail()
        } else {
            assert.equal(seasonPlan.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testDelete() {
    try {
        const seasonPlan = await axios.delete(`${baseUrl}/seasonPlan/${global.testVars.idSeasonPlanTest}`)

        if (_.isEmpty(seasonPlan.data)) {
            assert.fail()
        } else {
            assert.equal(seasonPlan.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}


describe('seasonPlan Tests', () => {
    it('test Creating test seasonPlan', testCreation)
    it('test getting the list of seasonPlans', testgetAll)
    it('test getting the test seasonPlan', testGetOne)
    it('test updating test seasonPlan', testUpdate)
    it('test deleting test seasonPlan', testDelete)
})