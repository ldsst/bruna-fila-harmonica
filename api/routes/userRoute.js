const { Router } = require('express')
const UserController = require('../controllers/UserController')

class UserRoute {
  constructor() {
    this.router = Router()
    this.userController = new UserController()
  }

  init() {
    return this.router
      .get('/user', this.userController.getAllUser)
      .get('/user/:id', this.userController.getSpecificUser)
      .put('/user/:id', this.userController.updateUser)
      .delete('/user/:id', this.userController.deleteUser)
      .put('/novaSenha', this.userController.novaSenha)

      .post('/sign-in', this.userController.signIn)
      .post('/sign-up', this.userController.signUp)
  }
}

module.exports = UserRoute
