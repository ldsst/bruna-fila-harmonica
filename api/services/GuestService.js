const Services = require('./Services')

class GuestService extends Services {
  constructor(){
    super('Convidado')
  }
}

module.exports = GuestService