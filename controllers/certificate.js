const Profile = require('../models').Profile;
const Certificate = require('../models').Certificate;

module.exports = {
  list(req, res) {
    return Certificate
      .findAll({
        include: [{
          model: Profile,
        }],
      })
      .then((certifs) => res.status(200).send(certifs))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Certificate
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then((certif) => {
        if (!certif) {
          return res.status(404).send({
            message: 'certif Not Found',
          });
        }
        return res.status(200).send(certif);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Certificate
      .create({
        ProfileId: req.body.ProfileId,
        title: req.body.title,
        published_by: req.body.published_by,
        period_begin: req.body.period_begin,
        period_end: req.body.period_end,
        certificate_number: req.body.certificate_number,
        certificate_link: req.body.certificate_link
      })
      .then((certif) => res.status(201).send(certif))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Certificate
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then(certif => {
        if (!certif) {
          return res.status(404).send({
            message: 'certif Not Found',
          });
        }
        return Certificate
          .update({
            title: req.body.title || certif.title,
            published_by: req.body.published_by || certif.published_by,
            period_begin: req.body.period_begin || certif.period_begin,
            period_end: req.body.period_end || certif.period_end,
            certificate_number: req.body.certificate_number || certif.certificate_number,
            certificate_link: req.body.certificate_link || certif.certificate_link
          })
          .then(() => res.status(200).send(certif))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Certificate
      .findByPk(req.params.id)
      .then(certif => {
        if (!certif) {
          return res.status(400).send({
            message: 'certif Not Found',
          });
        }
        return Certificate
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};