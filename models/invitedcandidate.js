'use strict';
module.exports = (sequelize, DataTypes) => {
    const InvitedCandidate = sequelize.define("InvitedCandidate", {
        RecruiterId: {
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
  return InvitedCandidate;
};