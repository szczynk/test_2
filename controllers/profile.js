const Profile = require('../models').Profile;
const User = require('../models').User;
const WorkExperience = require('../models').WorkExperience;
const OrgExperience = require('../models').OrgExperience;



module.exports = {
  list(req, res) {
    return Profile
      .findAll({
        include: [{
          model: User,
        },
        {
          model: WorkExperience
        }],
      })
      .then((profiles) => res.status(200).send(profiles))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Profile
      .findByPk(req.params.id, {
        include: [{
          model: User,
        },
        {
          model: WorkExperience
        }],
      })
      .then((profile) => {
        if (!profile) {
          return res.status(404).send({
            message: 'Profile Not Found',
          });
        }
        return res.status(200).send(profile);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Profile
      .create({
        UserId: req.body.UserId,
        name: req.body.name,
        city: req.body.city,
        country: req.body.country,
        education: req.body.education,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        about: req.body.about,
      })
      .then((profile) => res.status(201).send(profile))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Profile
      .findByPk(req.params.id, {
        include: [{
          model: User,
        },
        {
          model: WorkExperience
        }],
      })
      .then(profile => {
        if (!profile) {
          return res.status(404).send({
            message: 'Profile Not Found',
          });
        }
        return profile
          .update({
            name: req.body.name || profile.name,
            city: req.body.city || profile.city,
            education: req.body.education || profile.education,
            phoneNumber: req.body.phoneNumber || profile.phoneNumber,
            email: req.body.email || profile.email,
            about: req.body.about || profile.about
          })
          .then(() => res.status(200).send(profile))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Profile
      .findByPk(req.params.id)
      .then(profile => {
        if (!profile) {
          return res.status(400).send({
            message: 'Profile Not Found',
          });
        }
        return profile
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};