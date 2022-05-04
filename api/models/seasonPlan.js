'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanoTemporada = sequelize.define('PlanoTemporada', {
        idPlanoTemporada: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeTemporada: DataTypes.STRING,
        anoTemporada: DataTypes.INTEGER,
        observacoes: DataTypes.STRING,
    },
        {
            freezeTableName: true,
            timestamps: false
        },
        {});
    return PlanoTemporada;
};
