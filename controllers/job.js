const Recruiter = require('../models').Recruiter;
const Job = require('../models').Job;

module.exports = {
  list(req, res) {
    return Job
      .findAll({
        include: [{
          model: Recruiter,
        }],
      })
      .then((jobs) => res.status(200).send(jobs))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Job
      .findByPk(req.params.id, {
        include: [{
          model: Recruiter,
        }],
      })
      .then((job) => {
        if (!job) {
          return res.status(404).send({
            message: 'Job Not Found',
          });
        }
        return res.status(200).send(job);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Job
      .create({
        RecruiterId: req.body.RecruiterId,
        title: req.body.title,
        skill: req.body.skill,
        requirements: req.body.requirements,
        description: req.body.description,
        isActive: req.body.isActive
      })
      .then((job) => res.status(201).send(job))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Job
      .findByPk(req.params.id, {
        include: [{
          model: Recruiter,
        }],
      })
      .then(job => {
        if (!job) {
          return res.status(404).send({
            message: 'Job Not Found',
          });
        }
        return Job
          .update({
            RecruiterId: req.body.RecruiterId,
            title: req.body.title,
            skill: req.body.skill,
            requirements: req.body.requirements,
            description: req.body.description,
            isActive: req.body.isActive
          })
          .then(() => res.status(200).send(job))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Job
      .findByPk(req.params.id)
      .then(job => {
        if (!job) {
          return res.status(400).send({
            message: 'Job Not Found',
          });
        }
        return Job
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};