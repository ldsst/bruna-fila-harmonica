const Services = require('./Services')

class PeopleService extends Services {
  constructor(){
    super('Pessoas')
  }
}

module.exports = PeopleService