const Profile = require('../models').Profile;
const Achievement = require('../models').Achievement;

module.exports = {
  list(req, res) {
    return Achievement
      .findAll({
        include: [{
          model: Profile,
        }],
      })
      .then((achieves) => res.status(200).send(achieves))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Achievement
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then((achieve) => {
        if (!achieve) {
          return res.status(404).send({
            message: 'achieve Not Found',
          });
        }
        return res.status(200).send(achieve);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Achievement
      .create({
        ProfileId: req.body.ProfileId,
        title: req.body.title,
        subtitle: req.body.subtitle,
        period: req.body.period,
        description: req.body.description
      })
      .then((achieve) => res.status(201).send(achieve))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Achievement
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then(achieve => {
        if (!achieve) {
          return res.status(404).send({
            message: 'achieve Not Found',
          });
        }
        return Achievement
          .update({
            title: req.body.title || achieve.title,
            subtitle: req.body.subtitle || achieve.subtitle,
            period: req.body.period || achieve.period,
            description: req.body.description || achieve.description
          })
          .then(() => res.status(200).send(achieve))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Achievement
      .findByPk(req.params.id)
      .then(achieve => {
        if (!achieve) {
          return res.status(400).send({
            message: 'achieve Not Found',
          });
        }
        return Achievement
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};