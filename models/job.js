'use strict';
module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define("Job", {
        RecruiterId: {
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        requirement: {
            type: DataTypes.STRING
        },
        skill: {
            type: DataTypes.STRING
        },
        locationTag: {
            type: DataTypes.STRING
        },
        educationTag: {
            type: DataTypes.STRING
        },
        experienceTag: {
            type: DataTypes.STRING
        },
        careerTag: {
            type: DataTypes.STRING
        },
        salaryTag: {
            type: DataTypes.STRING
        },
        isActive: {
            type: DataTypes.BOOLEAN
        }
    });

    // define association here
    Job.associate = models => {
        //jobs-recruiter
        Job.belongsTo(models.Recruiter, {
            foreignKey: {
                allowNull: false
            }
        });

        Job.belongsToMany(models.Profile, {
            as: 'SaveProfile',
            through: 'SavedJob',
            onDelete: 'CASCADE'
        });

        Job.belongsToMany(models.Profile, {
            as: 'Applicant',
            through: 'AppliedJob',
            onDelete: 'CASCADE'
        });
    };  

  return Job;
};