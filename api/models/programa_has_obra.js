'use strict';
module.exports = (sequelize) => {
    const Programa_has_obra = sequelize.define
    ('Programa_has_obra', {},
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

        Programa_has_obra.associate = function(models) {
            models.Programa.belongsToMany(models.Obra, {
                through: Programa_has_obra,
                as: 'obra',
                onDelete: 'CASCADE',
                foreignKey: 'idPrograma'
            })
            models.Obra.belongsToMany(models.Programa, {
                through: Programa_has_obra,
                as: 'programa',
                onDelete: 'CASCADE',
                foreignKey: 'idObra'
            })
    };
    return Programa_has_obra;
};
