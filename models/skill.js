'use strict';
module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define("Skill", {
        ProfileId: {
            type: DataTypes.INTEGER
        },
        skill_name: {
            type: DataTypes.STRING
        }
    });

    // define association here
    Skill.associate = models => {
        //user-profil
        Skill.belongsTo(models.Profile, {
            foreignKey: {
                allowNull: false
            }      
        });
    };  

  return Skill;
};