const User = require('../models').User;
const Jobs = require('../models').Jobs;
const Recruiters = require('../models').Recruiters;

module.exports = {
  list(req, res) {
    return Recruiters
      .findAll({
        include: [{
          model: User,
        },
        {
          model: Jobs
        }],
      })
      .then((recruiters) => res.status(200).send(recruiters))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Recruiters
      .findByPk(req.params.id, {
        include: [{
          model: User,
        },
        {
          model: Jobs
        }],
      })
      .then((recruiters) => {
        if (!recruiters) {
          return res.status(404).send({
            message: 'Profile Not Found',
          });
        }
        return res.status(200).send(recruiters);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Recruiter
      .create({
        UserId: req.body.UserId,
        name: req.body.name,
        jobTitle: req.body.jobTitle,
        city: req.body.city,
        country: req.body.country,
        company: req.body.company,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        website: req.body.website,
        email: req.body.email,
        about: req.body.about,
      })
      .then((recruiters) => res.status(201).send(recruiters))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Recruiters
      .findByPk(req.params.id, {
        include: [{
          model: User,
        },
        {
          model: Jobs
        }],
      })
      .then(recruiters => {
        if (!recruiters) {
          return res.status(404).send({
            message: 'Profile Not Found',
          });
        }
        return recruiters
          .update({
            name: req.body.name || recruiters.name,
            city: req.body.city || recruiters.city,
            education: req.body.education || recruiters.education,
            phoneNumber: req.body.phoneNumber || recruiters.phoneNumber,
            email: req.body.email || recruiters.email,
            about: req.body.about || recruiters.about
          })
          .then(() => res.status(200).send(recruiters))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Recruiters
      .findByPk(req.params.id)
      .then(recruiters => {
        if (!recruiters) {
          return res.status(400).send({
            message: 'Profile Not Found',
          });
        }
        return recruiters
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};