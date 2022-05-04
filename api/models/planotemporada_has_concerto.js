'use strict';
module.exports = (sequelize) => {
    const Planotemporada_has_concerto = sequelize.define
    ('Planotemporada_has_concerto', {},
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

        Planotemporada_has_concerto.associate = function(models) {
            models.PlanoTemporada.belongsToMany(models.Concerto, {
                through: Planotemporada_has_concerto,
                as: 'concerto',
                onDelete: 'CASCADE',
                foreignKey: 'idPlanoTemporada'
            })
            models.Concerto.belongsToMany(models.PlanoTemporada, {
                through: Planotemporada_has_concerto,
                as: 'planoTemporada',
                onDelete: 'CASCADE',
                foreignKey: 'idConcerto'
            })
    };

    return Planotemporada_has_concerto;
};