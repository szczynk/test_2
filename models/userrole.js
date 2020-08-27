'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserRole = sequelize.define("UserRole", {
        RoleId: {
            type: DataTypes.INTEGER
        },
        UserId: {
            type: DataTypes.INTEGER
        }
    });

    // define association here
  return UserRole;
};