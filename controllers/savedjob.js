const SavedJob = require('../models').SavedJob;

module.exports = {
  list(req, res) {
    return SavedJob
      .findAll({
        where: {
          ProfileId: req.params.ProfileId
        }
      })
      .then((savedjobs) => res.status(200).send(savedjobs))
      .catch((error) => { res.status(400).send(error); });
  },

  count(req, res) {
    return SavedJob
      .findAndCountAll({
        where: {
          ProfileId: req.params.ProfileId
        }
      })
      .then((savedjob) => res.status(200).send(savedjob))
      .catch((error) => { res.status(400).send(error); });
  }, 
};