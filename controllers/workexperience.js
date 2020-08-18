const Profile = require('../models').Profile;
const WorkExperience = require('../models').WorkExperience;

module.exports = {
  list(req, res) {
    return WorkExperience
      .findAll({
        include: [{
          model: Profile,
        }],
      })
      .then((workexps) => res.status(200).send(workexps))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return WorkExperience
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then((workexp) => {
        if (!workexp) {
          return res.status(404).send({
            message: 'workexp Not Found',
          });
        }
        return res.status(200).send(workexp);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return WorkExperience
      .create({
        ProfileId: req.body.ProfileId,
        title: req.body.title,
        at: req.body.at,
        period_begin: req.body.period_begin,
        period_end: req.body.period_end,
        description: req.body.description
      })
      .then((workexp) => res.status(201).send(workexp))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return WorkExperience
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then(workexp => {
        if (!workexp) {
          return res.status(404).send({
            message: 'workexp Not Found',
          });
        }
        return WorkExperience
          .update({
            title: req.body.title || workexp.name,
            at: req.body.at || workexp.at,
            period_begin: req.body.period_begin || workexp.period_begin,
            period_end: req.body.period_end || workexp.period_end,
            description: req.body.description || workexp.description
          })
          .then(() => res.status(200).send(workexp))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return WorkExperience
      .findByPk(req.params.id)
      .then(workexp => {
        if (!workexp) {
          return res.status(400).send({
            message: 'workexp Not Found',
          });
        }
        return WorkExperience
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};