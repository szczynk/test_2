const Recruiters = require('../models').Recruiters;
const Jobs = require('../models').Jobs;

module.exports = {
  list(req, res) {
    return Jobs
      .findAll({
        include: [{
          model: Recruiters,
        }],
      })
      .then((jobs) => res.status(200).send(jobs))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Jobs
      .findByPk(req.params.id, {
        include: [{
          model: Recruiters,
        }],
      })
      .then((jobs) => {
        if (!jobs) {
          return res.status(404).send({
            message: 'Job Not Found',
          });
        }
        return res.status(200).send(jobs);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Jobs
      .create({
        RecruitersId: req.body.RecruitersId,
        title: req.body.title,
        skill: req.body.skill,
        requirements: req.body.requirements,
        description: req.body.description,
        isActive: req.body.isActive
      })
      .then((jobs) => res.status(201).send(jobs))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Jobs
      .findByPk(req.params.id, {
        include: [{
          model: Recruiters,
        }],
      })
      .then(jobs => {
        if (!jobs) {
          return res.status(404).send({
            message: 'Job Not Found',
          });
        }
        return Jobs
          .update({
            RecruitersId: req.body.RecruitersId,
            title: req.body.title,
            skill: req.body.skill,
            requirements: req.body.requirements,
            description: req.body.description,
            isActive: req.body.isActive
          })
          .then(() => res.status(200).send(jobs))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Jobs
      .findByPk(req.params.id)
      .then(jobs => {
        if (!jobs) {
          return res.status(400).send({
            message: 'Jobs Not Found',
          });
        }
        return Jobs
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};