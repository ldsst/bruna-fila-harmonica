'use strict';
module.exports = (sequelize, DataTypes) => {
    const Compositor = sequelize.define('compositor', {
        idCompositor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomeCompleto: DataTypes.STRING,
        nomeAbreviado: DataTypes.STRING,
        sexo: DataTypes.STRING,
        anoNascimento: DataTypes.STRING,
        anoMorte: DataTypes.STRING,
        nacionalidade: DataTypes.STRING,
        localNascimento: DataTypes.STRING,
        localMorte: DataTypes.STRING,
        observacoes: DataTypes.STRING,
        efemerides: DataTypes.STRING
    },
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

        Compositor.associate = function (models) {
            Compositor.hasMany(models.Obra, {
                foreignKey: 'idObra'
            })
        };

    return Compositor;
};