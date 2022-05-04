const Services = require('./Services')

class UserService extends Services {
  constructor(){
    super('usuario')
  }
}

module.exports = UserService