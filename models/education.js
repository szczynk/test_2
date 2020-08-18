'use strict';
module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define("Education", {
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
    Education.associate = models => {
        //user-profil
        Education.belongsTo(models.Profile, {
            foreignKey: {
                allowNull: false
            }      
        });
    };  

  return Education;
};