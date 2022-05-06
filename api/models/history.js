'use strict'
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define(
    'Historico',
    {
      idHistorico: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      compositor: DataTypes.STRING,
      name: DataTypes.STRING,
      obra: DataTypes.STRING,
      dataInicio: DataTypes.DATEONLY,
      dataFim: DataTypes.STRING,
      serie: DataTypes.STRING,
      regente: DataTypes.STRING,
      solista: DataTypes.STRING,
      cidade: DataTypes.STRING,
      local: DataTypes.STRING,
      arranjador: DataTypes.STRING
    },
    {
      freezeTableName: true,
      timestamps: false
    },
    {}
  )

  return History
}
