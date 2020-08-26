const User = require('../models').User;
const Job = require('../models').Job;
const Recruiter = require('../models').Recruiter;
const Profile = require('../models').Profile;


module.exports = {
  list(req, res) {
    return Recruiter
      .findAll({
        include: [{
          model: User,
        },
        {
          model: Job
        }],
      })
      .then((recruiters) => res.status(200).send(recruiters))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Recruiter
      .findByPk(req.params.id, {
        include: [{
          model: User,
        },
        {
          model: Job
        }],
      })
      .then((recruiter) => {
        if (!recruiter) {
          return res.status(404).send({
            message: 'Profile Not Found',
          });
        }
        return res.status(200).send(recruiter);
      })
      .catch((error) => res.status(400).send(error));
  },

  inviteCandidate(req, res) {
    return Recruiter
    .findByPk(req.params.id)
    .then((recruiter) => {
      Profile
      .findByPk(req.body.ProfileId)
      .then((profile) => {
        recruiter.addInviteCandidate(profile, { through: { status: "Pending" } } );
        return res.status(200).send(recruiter);
      })
    })
    .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Recruiter
      .findByPk(req.params.id, {
        include: [{
          model: User,
        },
        {
          model: Job
        }],
      })
      .then(recruiter => {
        if (!recruiter) {
          return res.status(404).send({
            message: 'Profile Not Found',
          });
        }
        return recruiter
          .update({
            name: req.body.name || recruiter.name,
            city: req.body.city || recruiter.city,
            education: req.body.education || recruiter.education,
            phoneNumber: req.body.phoneNumber || recruiter.phoneNumber,
            email: req.body.email || recruiter.email,
            about: req.body.about || recruiter.about
          })
          .then(() => res.status(200).send(recruiter))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Recruiter
      .findByPk(req.params.id)
      .then(recruiter => {
        if (!recruiter) {
          return res.status(400).send({
            message: 'Profile Not Found',
          });
        }
        return recruiter
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};