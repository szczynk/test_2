const Profile = require('../models').Profile;
const OrgExperience = require('../models').OrgExperience;

module.exports = {
  list(req, res) {
    return OrgExperience
      .findAll({
        include: [{
          model: Profile,
        }],
      })
      .then((orgexps) => res.status(200).send(orgexps))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return OrgExperience
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then((orgexp) => {
        if (!orgexp) {
          return res.status(404).send({
            message: 'orgexp Not Found',
          });
        }
        return res.status(200).send(orgexp);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return OrgExperience
      .create({
        ProfileId: req.body.ProfileId,
        title: req.body.title,
        at: req.body.at,
        period_begin: req.body.period_begin,
        period_end: req.body.period_end,
        description: req.body.description
      })
      .then((orgexp) => res.status(201).send(orgexp))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return OrgExperience
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then(orgexp => {
        if (!orgexp) {
          return res.status(404).send({
            message: 'orgexp Not Found',
          });
        }
        return OrgExperience
          .update({
            title: req.body.title || orgexp.name,
            at: req.body.at || orgexp.at,
            period_begin: req.body.period_begin || orgexp.period_begin,
            period_end: req.body.period_end || orgexp.period_end,
            description: req.body.description || orgexp.description
          })
          .then(() => res.status(200).send(orgexp))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return OrgExperience
      .findByPk(req.params.id)
      .then(orgexp => {
        if (!orgexp) {
          return res.status(400).send({
            message: 'orgexp Not Found',
          });
        }
        return OrgExperience
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};