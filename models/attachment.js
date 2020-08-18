'use strict';
module.exports = (sequelize, DataTypes) => {
    const Attachment = sequelize.define("Attachment", {
        name: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        data: {
            type: DataTypes.STRING
        }
    });

    // define association here
    Attachment.associate = models => {
        //user-profil
        Attachment.belongsTo(models.Profile, {
            foreignKey: {
                allowNull: false
            }      
        });
    };  

  return Attachment;
};