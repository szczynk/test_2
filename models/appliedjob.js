'use strict';
module.exports = (sequelize, DataTypes) => {
    const AppliedJob = sequelize.define("AppliedJob", {
        JobId: {
            type: DataTypes.INTEGER
        },
        ProfileId: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.STRING
        }
    });

    // define association here
  return AppliedJob;
};