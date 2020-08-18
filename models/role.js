'use strict';
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("Role", {
        role_name: {
            type: DataTypes.STRING
        }
    });

    // define association here
    Role.associate = models => {
        //user-role
        Role.belongsToMany(models.User, {
            through: 'UserRole',
            onDelete: 'CASCADE'
        });
    };  

  return Role;
};