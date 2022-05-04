'use strict';
module.exports = (sequelize, DataTypes) => {
    const Ensaio = sequelize.define('Ensaio', {
        idEnsaio: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dataEnsaio: DataTypes.DATEONLY,
        horaInicio: DataTypes.TIME,
        duracao: DataTypes.STRING,
        tipo: DataTypes.STRING,
        ordemEnsaio: DataTypes.STRING
    },
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

    return Ensaio;
};