const Profile = require('../models').Profile;
const SocialLink = require('../models').SocialLink;

module.exports = {
  list(req, res) {
    return SocialLink
      .findAll({
        include: [{
          model: Profile,
        }],
      })
      .then((links) => res.status(200).send(links))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return SocialLink
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then((link) => {
        if (!link) {
          return res.status(404).send({
            message: 'link Not Found',
          });
        }
        return res.status(200).send(link);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return SocialLink
      .create({
        ProfileId: req.body.ProfileId,
        title: req.body.title,
        link: req.body.link
      })
      .then((link) => res.status(201).send(link))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return SocialLink
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then(link => {
        if (!link) {
          return res.status(404).send({
            message: 'link Not Found',
          });
        }
        return SocialLink
          .update({
            title: req.body.title || link.title,
            link: req.body.link || link.link
          })
          .then(() => res.status(200).send(link))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return SocialLink
      .findByPk(req.params.id)
      .then(link => {
        if (!link) {
          return res.status(400).send({
            message: 'link Not Found',
          });
        }
        return SocialLink
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};