'use strict';
module.exports = (sequelize, DataTypes) => {
    const SavedCandidate = sequelize.define("SavedCandidate", {
        RecruiterId: {
            type: DataTypes.INTEGER
        },
        ProfileId: {
            type: DataTypes.INTEGER
        }
    });

    // define association here
  return SavedCandidate;
};