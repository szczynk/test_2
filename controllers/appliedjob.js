const AppliedJob = require('../models').AppliedJob;

module.exports = {
  list(req, res) {
    return AppliedJob
      .findAll({
        where: {
          ProfileId: req.params.ProfileId
        }
      })
      .then((appliedjobs) => res.status(200).send(appliedjobs))
      .catch((error) => { res.status(400).send(error); });
  },

  count(req, res) {
    return AppliedJob
      .findAndCountAll({
        where: {
          ProfileId: req.params.ProfileId
        }
      })
      .then((appliedjob) => res.status(200).send(appliedjob))
      .catch((error) => { res.status(400).send(error); });
  }, 

  applyProfile(req, res) {
    if(req.body.isAccepted == "true") {
      return AppliedJob
      .update({status:'Accepted'},
        {
          where: {
            ProfileId: req.body.ProfileId,
            JobId: req.body.JobId
          }
        }
        )
      .then((appliedjob) => {res.status(200).send(appliedjob);})
      .catch((error) => res.status(400).send(error));
    }
    else {
      return AppliedJob
      .update({status:'Declined'},
        {
          where: {
            ProfileId: req.body.ProfileId,
            JobId: req.body.JobId
          }
        }
        )
      .then((appliedjob) => {res.status(200).send(appliedjob);})
      .catch((error) => res.status(400).send(error));
    }    
  },
};