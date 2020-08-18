'use strict';
module.exports = (sequelize, DataTypes) => {
    const SocialLink = sequelize.define("SocialLink", {
        title: {
            type: DataTypes.STRING
        },
        link: {
            type: DataTypes.STRING
        }
    });

    // define association here
    SocialLink.associate = models => {
        //user-profil
        SocialLink.belongsTo(models.Profile, {
            foreignKey: {
                allowNull: false
            }      
        });
    };  

  return SocialLink;
};