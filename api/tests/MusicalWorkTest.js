const chai = require('chai')
const _ = require('lodash')
const axios = require('axios')

const assert = chai.assert

const baseUrl = `http://localhost:3006`

async function testCreation() {
    try {
        const data = {
            'nomeObra': 'nomeObra',
            'anoPeriodoComposicao': 'anoPeriodoComposicao',
            'duracao': 'duracao',
            'detalhesObra': 'detalhesObra',
            'efemerides': 'efemerides',
            'movimentos': 'movimentos',
            'qtdMovimentos': '1',
            'observacoes': 'observacoes',
            'instrumentacaoExtenso': 'instrumentacaoExtenso',
            'instrumentacaoCodificada': 'instrumentacaoCodificada',
            'idCompositor': '1',
        }

        const musicalWork = await axios.post(`${baseUrl}/musicalWork`, data)

        if (_.isEmpty(musicalWork.data)) {
            assert.fail()
        } else {
            assert.equal(musicalWork.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testgetAll() {
    try {
        const listMusicalWorks = await axios.get(`${baseUrl}/musicalWork`)

        if (_.isEmpty(listMusicalWorks.data)) {
            assert.fail()
        } else {
            global.testVars.idMusicalWorkTest = listMusicalWorks.data.pop().idObra
            assert.equal(listMusicalWorks.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testGetOne() {
    try {
        const musicalWork = await axios.get(`${baseUrl}/musicalWork/${global.testVars.idMusicalWorkTest}`)

        if (_.isEmpty(musicalWork.data)) {
            assert.fail()
        } else {
            assert.equal(musicalWork.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testUpdate() {
    try {
        const data = {
            'nomeObra': 'nomeObra',
            'anoPeriodoComposicao': 'anoPeriodoComposicao',
            'duracao': 'duracao',
            'detalhesObra': 'detalhesObra',
            'efemerides': 'efemerides',
            'movimentos': 'movimentos',
            'qtdMovimentos': '1',
            'observacoes': 'observacoes',
            'instrumentacaoExtenso': 'instrumentacaoExtenso',
            'instrumentacaoCodificada': 'instrumentacaoCodificada',
            'idCompositor': '1',
        }

        const musicalWork = await axios.put(`${baseUrl}/musicalWork/${global.testVars.idMusicalWorkTest}`, data)

        if (_.isEmpty(musicalWork.data)) {
            assert.fail()
        } else {
            assert.equal(musicalWork.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testDelete() {
    try {
        const musicalWork = await axios.delete(`${baseUrl}/musicalWork/${global.testVars.idMusicalWorkTest}`)

        if (_.isEmpty(musicalWork.data)) {
            assert.fail()
        } else {
            assert.equal(musicalWork.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}


describe('musicalWork Tests', () => {
    it('test Creating test musicalWork', testCreation)
    it('test getting the list of musicalWorks', testgetAll)
    it('test getting the test musicalWork', testGetOne)
    it('test updating test musicalWork', testUpdate)
    it('test deleting test musicalWork', testDelete)
})