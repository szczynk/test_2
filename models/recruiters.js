'use strict';
module.exports = (sequelize, DataTypes) => {
    const Recruiters = sequelize.define("Recruiters", {
        name: {
            type: DataTypes.STRING
        },
        jobTitle: {
            type: DataTypes.STRING
        },
        company: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        phoneNumber: {
            type: DataTypes.STRING
        },
        website: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        about: {
            type: DataTypes.STRING
        }
    });

    // define association here
    Recruiters.associate = models => {
        //recruiter-profil
        Recruiters.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }      
        });
        //jobs
        Recruiters.hasMany(models.Jobs, {
            onDelete: 'CASCADE'       
        });
    };  

  return Recruiters;
};