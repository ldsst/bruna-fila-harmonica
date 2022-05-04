'use strict';
module.exports = (sequelize, DataTypes) => {
    const Obra = sequelize.define('Obra', {
        idObra: {
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
        nomeObra: DataTypes.STRING,
        anoPeriodoComposicao: DataTypes.STRING,
        duracao: DataTypes.STRING,
        detalhesObra: DataTypes.STRING,
        efemerides: DataTypes.STRING,
        movimentos: DataTypes.STRING,
        qtdMovimentos: DataTypes.STRING,
        observacoes: DataTypes.STRING,
        instrumentacaoExtenso: DataTypes.STRING,
        instrumentacaoCodificada: DataTypes.STRING,
        arranjador: DataTypes.STRING
    },
        {
            freezeTableName: true,
            timestamps: false
        },
        {});
    return Obra;
};