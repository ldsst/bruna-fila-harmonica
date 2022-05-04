'use strict';
module.exports = (sequelize) => {
    const Concerto_has_ensaio = sequelize.define
    ('Concerto_has_ensaio', {},
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

        Concerto_has_ensaio.associate = function(models) {
            models.Concerto.belongsToMany(models.Ensaio, {
                through: Concerto_has_ensaio,
                as: 'ensaio',
                onDelete: 'CASCADE',
                foreignKey: 'idConcerto'
            })
            models.Ensaio.belongsToMany(models.Concerto, {
                through: Concerto_has_ensaio,
                as: 'concerto',
                onDelete: 'CASCADE',
                foreignKey: 'idEnsaio'
            })
    };

    return Concerto_has_ensaio;
};