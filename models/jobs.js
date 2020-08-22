'use strict';
module.exports = (sequelize, DataTypes) => {
    const Jobs = sequelize.define("Jobs", {
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
    Jobs.associate = models => {
        //jobs-recruiter
        Jobs.belongsTo(models.Recruiters, {
            foreignKey: {
                allowNull: false
            }
        });

        Jobs.belongsToMany(models.Profile, {
            through: 'SavedJobs',
            onDelete: 'CASCADE'
        });

        Jobs.belongsToMany(models.Profile, {
            through: 'AppliedJobs',
            onDelete: 'CASCADE'
        });
    };  

  return Jobs;
};