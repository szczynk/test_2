const Profile = require('../models').Profile;
const Skill = require('../models').Skill;

module.exports = {
  list(req, res) {
    return Skill
      .findAll({
        include: [{
          model: Profile,
        }],
      })
      .then((skills) => res.status(200).send(skills))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Skill
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then((skill) => {
        if (!skill) {
          return res.status(404).send({
            message: 'skill Not Found',
          });
        }
        return res.status(200).send(skill);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Skill
      .create({
        ProfileId: req.body.ProfileId,
        skill_name: req.body.skill_name
      })
      .then((skill) => res.status(201).send(skill))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Skill
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then(skill => {
        if (!skill) {
          return res.status(404).send({
            message: 'skill Not Found',
          });
        }
        return Skill
          .update({
            skill_name: req.body.skill_name || skill.skill_name
          })
          .then(() => res.status(200).send(skill))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Skill
      .findByPk(req.params.id)
      .then(skill => {
        if (!skill) {
          return res.status(400).send({
            message: 'skill Not Found',
          });
        }
        return Skill
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};