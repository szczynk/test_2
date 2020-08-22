'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    });

    // define association here
    User.associate = models => {
        //user-profil
        User.hasOne(models.Profile, {
            onDelete: 'CASCADE'       
        });

        //user-role
        User.belongsToMany(models.Role, {
            through: 'UserRole',
            onDelete: 'CASCADE'
        });

        //user-recruiter
        User.hasOne(models.Recruiters, {
            onDelete: 'CASCADE'       
        });
    };  

  return User;
};