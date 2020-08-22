'use strict';
module.exports = (sequelize, DataTypes) => {
    const SavedJob = sequelize.define("SavedJob", {
        JobId: {
            type: DataTypes.INTEGER
        },
        ProfileId: {
            type: DataTypes.INTEGER
        }
    });

    // define association here
  return SavedJob;
};