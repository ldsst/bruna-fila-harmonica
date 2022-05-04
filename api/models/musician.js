'use strict';
module.exports = (sequelize, DataTypes) => {
    const Musicista = sequelize.define('Musicista', {
        idMusicista: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        instrumento: DataTypes.STRING
    },
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

    return Musicista;
};