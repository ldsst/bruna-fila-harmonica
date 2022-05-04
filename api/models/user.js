'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        senha: DataTypes.STRING,
        nomeCompleto: DataTypes.STRING,
        nivelPermissao: DataTypes.STRING,
        email: DataTypes.STRING,
        cargo: DataTypes.STRING,
        canEdit: DataTypes.BOOLEAN,
    },
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

    return Usuario;
};

