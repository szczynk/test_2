const Profile = require('../models').Profile;
const Education = require('../models').Education;

module.exports = {
  list(req, res) {
    return Education
      .findAll({
        include: [{
          model: Profile,
        }],
      })
      .then((educats) => res.status(200).send(educats))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Education
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then((educat) => {
        if (!educat) {
          return res.status(404).send({
            message: 'educat Not Found',
          });
        }
        return res.status(200).send(educat);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Education
      .create({
        ProfileId: req.body.ProfileId,
        title: req.body.title,
        at: req.body.at,
        period_begin: req.body.period_begin,
        period_end: req.body.period_end,
        description: req.body.description
      })
      .then((educat) => res.status(201).send(educat))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Education
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then(educat => {
        if (!educat) {
          return res.status(404).send({
            message: 'educat Not Found',
          });
        }
        return Education
          .update({
            title: req.body.title || educat.title,
            at: req.body.at || educat.at,
            period_begin: req.body.period_begin || educat.period_begin,
            period_end: req.body.period_end || educat.period_end,
            description: req.body.description || educat.description
          })
          .then(() => res.status(200).send(educat))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Education
      .findByPk(req.params.id)
      .then(educat => {
        if (!educat) {
          return res.status(400).send({
            message: 'educat Not Found',
          });
        }
        return Education
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};