const Job = require('../models').Job;

module.exports = {
  listcareer(req, res) {
    return Job
      .findAll({
        where: {
          careerTag: req.body.careerTag
        },
      })
      .then((careertags) => res.status(200).send(careertags))
      .catch((error) => { res.status(400).send(error); });
  },

  listlocation(req, res) {
    return Job
      .findAll({
        where: {
          locationTag: req.body.locationTag
        },
      })
      .then((locations) => res.status(200).send(locations))
      .catch((error) => { res.status(400).send(error); });
  },

  listeducation(req, res) {
    return Job
      .findAll({
        where: {
          educationTag: req.body.educationTag
        },
      })
      .then((edutags) => res.status(200).send(edutags))
      .catch((error) => { res.status(400).send(error); });
  },

  listexperience(req, res) {
    return Job
      .findAll({
        where: {
          experienceTag: req.body.experienceTag
        },
      })
      .then((exptags) => res.status(200).send(exptags))
      .catch((error) => { res.status(400).send(error); });
  },

  listsalary(req, res) {
    return Job
      .findAll({
        where: {
          salaryTag: req.body.salaryTag
        },
      })
      .then((salarytags) => res.status(200).send(salarytags))
      .catch((error) => { res.status(400).send(error); });
  }}