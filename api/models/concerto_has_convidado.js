'use strict';
module.exports = (sequelize) => {
    const Concerto_has_convidado = sequelize.define
    ('Concerto_has_convidado', {},
        {
            freezeTableName: true,
            timestamps: false
        },
        {});

        Concerto_has_convidado.associate = function(models) {
            models.Concerto.belongsToMany(models.Convidado, {
                through: Concerto_has_convidado,
                as: 'convidado',
                onDelete: 'CASCADE',
                foreignKey: 'idConcerto'
            })
            models.Convidado.belongsToMany(models.Concerto, {
                through: Concerto_has_convidado,
                as: 'concerto',
                onDelete: 'CASCADE',
                foreignKey: 'idConvidado'
            })
    };

    return Concerto_has_convidado;
};