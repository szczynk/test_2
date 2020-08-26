const Profile = require('../models').Profile;

module.exports = {
  listcareer(req, res) {
    return Profile
      .findAll({
        where: {
          careerTag: req.body.careerTag
        },
      })
      .then((careertags) => res.status(200).send(careertags))
      .catch((error) => { res.status(400).send(error); });
  },

  listlocation(req, res) {
    return Profile
      .findAll({
        where: {
          city: req.body.city
        },
      })
      .then((locations) => res.status(200).send(locations))
      .catch((error) => { res.status(400).send(error); });
  },

  listeducation(req, res) {
    return Profile
      .findAll({
        where: {
          educationTag: req.body.educationTag
        },
      })
      .then((edutags) => res.status(200).send(edutags))
      .catch((error) => { res.status(400).send(error); });
  },

  listexperience(req, res) {
    return Profile
      .findAll({
        where: {
          experienceTag: req.body.experienceTag
        },
      })
      .then((exptags) => res.status(200).send(exptags))
      .catch((error) => { res.status(400).send(error); });
  }}