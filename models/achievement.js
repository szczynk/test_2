'use strict';
module.exports = (sequelize, DataTypes) => {
    const Achievement = sequelize.define("Achievement", {
        ProfileId: {
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING
        },
        subtitle: {
            type: DataTypes.STRING
        },
        period: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    });

    // define association here
    Achievement.associate = models => {
        //user-profil
        Achievement.belongsTo(models.Profile, {
            foreignKey: {
                allowNull: false
            }      
        });
    };  

  return Achievement;
};