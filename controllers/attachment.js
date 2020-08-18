const Profile = require('../models').Profile;
const Attachment = require('../models').Attachment;

module.exports = {
  list(req, res) {
    return Attachment
      .findAll({
        include: [{
          model: Profile,
        }],
      })
      .then((attachs) => res.status(200).send(attachs))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Attachment
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then((attach) => {
        if (!attach) {
          return res.status(404).send({
            message: 'attach Not Found',
          });
        }
        return res.status(200).send(attach);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Attachment
      .create({
        ProfileId: req.body.ProfileId,
        name: req.body.name,
        type: req.body.type,
        data: req.body.data
      })
      .then((attach) => res.status(201).send(attach))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Attachment
      .findByPk(req.params.id, {
        include: [{
          model: Profile,
        }],
      })
      .then(attach => {
        if (!attach) {
          return res.status(404).send({
            message: 'attach Not Found',
          });
        }
        return Attachment
          .update({
            name: req.body.name || attach.name,
            type: req.body.type || attach.type,
            data: req.body.data || attach.data
          })
          .then(() => res.status(200).send(attach))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Attachment
      .findByPk(req.params.id)
      .then(attach => {
        if (!attach) {
          return res.status(400).send({
            message: 'attach Not Found',
          });
        }
        return Attachment
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};