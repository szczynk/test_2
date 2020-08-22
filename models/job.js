'use strict';
module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define("Job", {
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
            through: 'SavedJob',
            onDelete: 'CASCADE'
        });

        Job.belongsToMany(models.Profile, {
            through: 'AppliedJob',
            onDelete: 'CASCADE'
        });
    };  

  return Job;
};