const database = require('../models')
const _ = require('lodash')
const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UserService } = require('../services')
const userService = new UserService()

class UserController {
  async novaSenha(req, res) {
    const salt = await bcrypt.genSalt(10)
    var newInformationUser = {
      email: req.body.email,
      senha: await bcrypt.hash(req.body.senha, salt)
    }
    try {
      await database.Usuario.update(newInformationUser, { where: { email: req.body.email } })
      const updatedUser = await database.Usuario.findOne({ where: { email: req.body.email } })
      return res.status(200).json(updatedUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async getAllUser(req, res) {
    try {
      const allUser = await database.Usuario.findAll()
      return res.status(200).json(allUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async getSpecificUser(req, res) {
    const { id } = req.params
    try {
      const specificUser = await database.Usuario.findOne({
        where: {
          idUsuario: Number(id)
        }
      })
      return res.status(200).json(specificUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async updateUser(req, res) {
    const { id } = req.params
    const newInformationUser = req.body

    try {
      await database.Usuario.update(newInformationUser, { where: { idUsuario: Number(id) } })
      const updatedUser = await database.Usuario.findOne({ where: { idUsuario: Number(id) } })
      return res.status(200).json(updatedUser)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params
    try {
      await database.Usuario.destroy({ where: { idUsuario: Number(id) } })
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  async signUp(req, res) {
    const user = req.body
    const passwordHash = await bcrypt.hash(user.password, 10)

    try {
      const userAlreadyExists = await database.Usuario.findOne({ where: { email: user.email } })
      if (userAlreadyExists) throw new Error('This email is already being used')
      const newUser = {
        ...user,
        email: user.email,
        senha: passwordHash,
        nomeCompleto: `${user.name} ${user.lastName}`
      }

      await database.Usuario.create(newUser)
      const àccessToken = jwt.sign(
        {
          id: newUser.idUsuario,
          email: newUser.email,
          nomeCompleto: newUser.nomeCompleto,
          senha: passwordHash
        },
        `${process.env.SECRET_KEY}`
      )
      return res.status(201).json({ àccessToken, nomeCompleto: newUser.nomeCompleto })
    } catch (error) {
      console.log(error)
      return res.status(400).json(error.message)
    }
  }

  async signIn(req, res) {
    const user = req.body
    let currentUser
    let isAuthorize

    try {
      currentUser = await database.Usuario.findOne({ where: { email: user.email } })
      if (!currentUser) throw new Error('Invalid email or password')

      isAuthorize = await bcrypt.compare(user.password, currentUser.senha)
      if (!isAuthorize) throw new Error('Invalid email or password')
    } catch (error) {
      return res.status(401).json(error.message)
    }

    const accessToken = jwt.sign(
      {
        id: currentUser.idUsuario,
        email: currentUser.email,
        nomeCompleto: currentUser.nomeCompleto,
        senha: currentUser.senha
      },
      `${process.env.SECRET_KEY}`
    )

    return res.status(200).json({ accessToken, nomeCompleto: currentUser.nomeCompleto })
  }
}

module.exports = UserController
