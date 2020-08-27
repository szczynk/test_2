'use strict';
module.exports = (sequelize, DataTypes) => {
    const Recruiter = sequelize.define("Recruiter", {
        UserId: {
            type: DataTypes.INTEGER
        },
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
    Recruiter.associate = models => {
        //recruiter-user
        Recruiter.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }      
        });

        //recruiter-jobs
        Recruiter.hasMany(models.Job, {
            onDelete: 'CASCADE'       
        });

        //recruiters-inviteprofile
        Recruiter.belongsToMany(models.Profile, {
            as: 'InviteCandidate',
            through: 'InvitedCandidate',
            onDelete: 'CASCADE'
        })

        //recruiters-savedprofile
        Recruiter.belongsToMany(models.Profile, {
            as: 'SaveCandidate',
            through: 'SavedCandidate',
            onDelete: 'CASCADE'
        })
    };  

  return Recruiter;
};