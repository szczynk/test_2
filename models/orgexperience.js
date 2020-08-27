'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrgExperience = sequelize.define("OrgExperience", {
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
    OrgExperience.associate = models => {
        //user-profil
        OrgExperience.belongsTo(models.Profile, {
            foreignKey: {
                allowNull: false
            }      
        });
    };  

  return OrgExperience;
};