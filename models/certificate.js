'use strict';
module.exports = (sequelize, DataTypes) => {
    const Certificate = sequelize.define("Certificate", {
        ProfileId: {
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING
        },
        published_by: {
            type: DataTypes.STRING
        },
        period_begin: {
            type: DataTypes.STRING
        },
        period_end: {
            type: DataTypes.STRING
        },
        certificate_number: {
            type: DataTypes.STRING
        },
        certificate_link: {
            type: DataTypes.STRING
        }
    });

    // define association here
    Certificate.associate = models => {
        //user-profil
        Certificate.belongsTo(models.Profile, {
            foreignKey: {
                allowNull: false
            }      
        });
    };  

  return Certificate;
};