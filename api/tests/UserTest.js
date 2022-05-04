const chai = require('chai')
const _ = require('lodash')
const axios = require('axios')

const assert = chai.assert

const baseUrl = `http://localhost:3006`

async function testCreation() {
    try {
        const data = {
            "senha": "teste",
            "nomeCompleto": "teste",
            "nivelPermissao": "teste",
            "email": "teste",
            "Funcionario_idFuncionario": 1,
            "Musicista_idMusicista": 1
        }

        const user = await axios.post(`${baseUrl}/user`, data)

        if (_.isEmpty(user.data)) {
            assert.fail()
        } else {
            assert.equal(user.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testgetAll() {
    try {
        const listUsers = await axios.get(`${baseUrl}/user`)

        if (_.isEmpty(listUsers.data)) {
            assert.fail()
        } else {
            global.testVars.idUserTest = listUsers.data.pop().idUsuario
            assert.equal(listUsers.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testGetOne() {
    try {
        const user = await axios.get(`${baseUrl}/user/${global.testVars.idUserTest}`)

        if (_.isEmpty(user.data)) {
            assert.fail()
        } else {
            assert.equal(user.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testUpdate() {
    try {
        const data = {
            "senha": "teste",
            "nomeCompleto": "teste",
            "nivelPermissao": "teste",
            "email": "teste",
            "Funcionario_idFuncionario": 1,
            "Musicista_idMusicista": 1
        }

        const user = await axios.put(`${baseUrl}/user/${global.testVars.idUserTest}`, data)

        if (_.isEmpty(user.data)) {
            assert.fail()
        } else {
            assert.equal(user.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}

async function testDelete() {
    try {
        const user = await axios.delete(`${baseUrl}/user/${global.testVars.idUserTest}`)

        if (_.isEmpty(user.data)) {
            assert.fail()
        } else {
            assert.equal(user.status, 200)
        }
    } catch (e) {
        console.log(e)
        assert.fail()
    }
}


describe('user Tests', () => {
    it('test Creating test user', testCreation)
    it('test getting the list of users', testgetAll)
    it('test getting the test user', testGetOne)
    it('test updating test user', testUpdate)
    it('test deleting test user', testDelete)
})