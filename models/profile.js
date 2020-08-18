'use strict';
module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("Profile", {
        name: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        education: {
            type: DataTypes.STRING
        },
        phoneNumber: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        about: {
            type: DataTypes.STRING
        }
    });

    // define association here
    Profile.associate = models => {
        //user-profil
        Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }      
        });
        //experience
        Profile.hasMany(models.WorkExperience, {
            onDelete: 'CASCADE'       
        });

        Profile.hasMany(models.OrgExperience, {
            onDelete: 'CASCADE'       
        });
        //Education
        Profile.hasMany(models.Education, {
            onDelete: 'CASCADE'       
        });
        //Skill
        Profile.hasMany(models.Skill, {
            onDelete: 'CASCADE'       
        });
        //Certificate
        Profile.hasMany(models.Certificate, {
            onDelete: 'CASCADE'       
        });
        //Achievement
        Profile.hasMany(models.Achievement, {
            onDelete: 'CASCADE'       
        });
        //Social Link
        Profile.hasMany(models.SocialLink, {
            onDelete: 'CASCADE'       
        });
        //Social Link
        Profile.hasMany(models.Attachment, {
            onDelete: 'CASCADE'       
        });
        
    };  

  return Profile;
};