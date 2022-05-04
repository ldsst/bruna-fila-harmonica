'use strict';
module.exports = (sequelize) => {
    const Concerto_has_musicista = sequelize.define
    ('Concerto_has_musicista', {},
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

        Concerto_has_musicista.associate = function(models) {
            models.Concerto.belongsToMany(models.Musicista, {
                through: Concerto_has_musicista,
                as: 'musicista',
                onDelete: 'CASCADE',
                foreignKey: 'idConcerto'
            })
            models.Musicista.belongsToMany(models.Concerto, {
                through: Concerto_has_musicista,
                as: 'concerto',
                onDelete: 'CASCADE',
                foreignKey: 'idMusicista'
            })
    };

    return Concerto_has_musicista;
};