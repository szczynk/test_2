'use strict';
module.exports = (sequelize, DataTypes) => {
    const WorkExperience = sequelize.define("WorkExperience", {
        ProfileId: {
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING
        },
        at: {
            type: DataTypes.STRING
        },
        period_begin: {
            type: DataTypes.STRING
        },
        period_end: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    });

    // define association here
    WorkExperience.associate = models => {
        //user-profil
        WorkExperience.belongsTo(models.Profile, {
            foreignKey: {
                allowNull: false
            }      
        });
    };  

  return WorkExperience;
};