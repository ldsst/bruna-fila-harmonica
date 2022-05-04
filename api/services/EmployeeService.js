const Services = require('./Services')

class EmployeeService extends Services {
  constructor(){
    super('Funcionario')
  }
}

module.exports = EmployeeService