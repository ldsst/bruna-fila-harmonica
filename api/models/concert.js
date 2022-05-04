'use strict';
module.exports = (sequelize, DataTypes) => {
    const Concerto = sequelize.define('Concerto', {
        idConcerto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPrograma: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
              model: 'programa',
              key: 'idPrograma'
            }
          },
        nome: DataTypes.STRING,
        dataInicio: DataTypes.DATEONLY,
        dataFim: DataTypes.DATEONLY,
        serie: DataTypes.STRING,
        numero: DataTypes.STRING,
        traje: DataTypes.STRING,
        observacoes: DataTypes.STRING,
        editora: DataTypes.STRING,
        horario: DataTypes.TIME,
        transmissaoOuGravacao: DataTypes.STRING,
        legenda: DataTypes.STRING,
        instrumentacaoMaior: DataTypes.STRING,
        local: DataTypes.STRING,
        cidade: DataTypes.STRING,
        transmissaoEhGratuita: DataTypes.BOOLEAN
    },
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

    return Concerto;
};

