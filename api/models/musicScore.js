'use strict';
module.exports = (sequelize, DataTypes) => {
    const MusicScore = sequelize.define('Partitura', {
        idPartitura: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numeroTombo: DataTypes.STRING,
        compositor: DataTypes.STRING,
        nomeObra: DataTypes.STRING,
        editoraPartitura: DataTypes.STRING,
        duracao: DataTypes.STRING,
        instrumentacao: DataTypes.STRING,
        movimentos: DataTypes.STRING,
        historicoObra: DataTypes.STRING,
        observacoes: DataTypes.STRING
    },
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

    return MusicScore;
};