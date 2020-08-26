const Profile = require('../models').Profile;
const User = require('../models').User;
const WorkExperience = require('../models').WorkExperience;
const OrgExperience = require('../models').OrgExperience;
const Education = require('../models').Education;
const Skill = require('../models').Skill;
const Certificate = require('../models').Certificate;
const Achievement = require('../models').Achievement;
const SocialLink = require('../models').SocialLink;
const Attachment = require('../models').Attachment;
const Job = require('../models').Job;


module.exports = {
  list(req, res) {
    return Profile
      .findAll({
        include: [{
          model: User,
        },
        {
          model: WorkExperience
        },
        {
          model: OrgExperience
        },
        {
          model: Education
        },
        {
          model: Skill
        },
        {
          model: Certificate
        },
        {
          model: Achievement
        },
        {
          model: SocialLink
        },
        {
          model: Attachment
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
        },
        {
          model: OrgExperience
        },
        {
          model: Education
        },
        {
          model: Skill
        },
        {
          model: Certificate
        },
        {
          model: Achievement
        },
        {
          model: SocialLink
        },
        {
          model: Attachment
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
        latestCareer: req.body.latestCareer,
        educationTag: req.body.educationTag,
        experienceTag: req.body.experienceTag,
        careerTag: req.body.careerTag,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        about: req.body.about,
      })
      .then((profile) => res.status(201).send(profile))
      .catch((error) => res.status(400).send(error));
  },

  applyJob(req, res) {
    return Profile
    .findByPk(req.params.id)
    .then((profile) => {
      Job
      .findByPk(req.body.JobId)
      .then((job) => {
        profile.addJobRequest(job, { through: { status: "Pending" } } );
        return res.status(200).send(profile);
      })
    })
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
        },
        {
          model: OrgExperience
        },
        {
          model: Education
        },
        {
          model: Skill
        },
        {
          model: Certificate
        },
        {
          model: Achievement
        },
        {
          model: SocialLink
        },
        {
          model: Attachment
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
            latestCareer: req.body.latestCareer || profile.latestCareer,
            educationTag: req.body.educationTag || profile.educationTag,
            experienceTag: req.body.experienceTag || profile.experienceTag,
            careerTag: req.body.careerTag || profile.careerTag,
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