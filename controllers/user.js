const User = require('../models').User;
const Profile = require('../models').Profile;
const Role = require('../models').Role;
const UserRole = require('../models').UserRole;
var bcrypt = require("bcrypt");

module.exports = {
  list(req, res) {
    return User
      .findAll({
        include: [{
          model: Profile,
        },
        {
          model: Role,
        }],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return User
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        },
        {
          model: Role,
        }],
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  register(req, res) {
    return User
      .create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        include: [{
          model: Profile,
        },
        {
          model: Role,
        }]
      })
      .then((user) => {
        if (req.body.isHunter == "true") {
          user.setRoles([2])
          return res.status(200).send(user);
        }
        else {
          user.setRoles([3])
          return res.status(200).send(user);
        }
      })
      .catch((error) => res.status(400).send(error));
  },

  login(req, res){
    return User
      .findOne({
        where: {
          email: req.body.email
        },
        include: [{
          model: Profile,
        },
        {
          model: Role,
        }]
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        };
        
        isPasswordValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!isPasswordValid) {
          return res.status(401).send({
            message: "Invalid Password!"
          });
        };

        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        },
        {
          model: Role,
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update({
            email: req.body.email || user.email,
            password: req.body.password || user.password,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User
      .findByPk(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};