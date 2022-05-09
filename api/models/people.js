'use strict'
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define(
    'Pessoas',
    {
      idPessoas: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      nomeCompleto: DataTypes.STRING,
      email: DataTypes.STRING,
      instrumentoPosicao: DataTypes.STRING,
      nivelPermissao: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      timestamps: false
    },
    {}
  )

  return People
}
