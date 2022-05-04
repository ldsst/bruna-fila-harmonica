'use strict';
module.exports = (sequelize, DataTypes) => {
    const Convidado = sequelize.define('Convidado', {
        idConvidado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        instrumento: DataTypes.STRING,
        email: DataTypes.STRING,
        dataNascimento: DataTypes.DATEONLY,
        localNascimento: DataTypes.STRING,
        nacionalidade: DataTypes.STRING,
        sexo: DataTypes.STRING,
        isRegente: DataTypes.BOOLEAN,
    },
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

    return Convidado;
};