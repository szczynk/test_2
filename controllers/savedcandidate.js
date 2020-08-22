const SavedCandidate = require('../models').SavedCandidate;

module.exports = {
  list(req, res) {
    return SavedCandidate
      .findAll({
        where: {
          RecruiterId: req.params.RecruiterId
        }
      })
      .then((savedcands) => res.status(200).send(savedcands))
      .catch((error) => { res.status(400).send(error); });
  },

  count(req, res) {
    return SavedCandidate
      .findAndCountAll({
        where: {
          RecruiterId: req.params.RecruiterId
        }
      })
      .then((savedcand) => res.status(200).send(savedcand))
      .catch((error) => { res.status(400).send(error); });
  }, 
};