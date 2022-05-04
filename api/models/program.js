'use strict';
module.exports = (sequelize, DataTypes) => {
    const Programa = sequelize.define('Programa', {
        idPrograma: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
          idCompositor: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
              model: 'compositor',
              key: 'idCompositor'
            }
          },
        nomePrograma: DataTypes.STRING,
        efemeridesObra: DataTypes.STRING,
        observacoes: DataTypes.STRING,
        efemeridesCompositor: DataTypes.STRING
    },
        {
            freezeTableName: true,
            timestamps: false
        },
        {});
    return Programa;
};

//nomeRegente: DataTypes.STRING,
//nomeSolista: DataTypes.STRING,
//instrumentoSolista: DataTypes.STRING,

// FAZER UM PROGRAMA HAS MUSICO/CONVIDADO