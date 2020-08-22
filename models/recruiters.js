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
        //recruiter-user
        Recruiters.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }      
        });
        //recruiter-jobs
        Recruiters.hasMany(models.Jobs, {
            onDelete: 'CASCADE'       
        });

        //recruiters-inviteprofile
        Recruiters.belongsToMany(models.Profile, {
            through: 'InvitedCandidate',
            onDelete: 'CASCADE'
        })

        //recruiters-savedprofile
        Recruiters.belongsToMany(models.Profile, {
            through: 'SavedCandidate',
            onDelete: 'CASCADE'
        })
    };  

  return Recruiters;
};