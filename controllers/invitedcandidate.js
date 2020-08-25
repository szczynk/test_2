const InvitedCandidate = require('../models').InvitedCandidate;

module.exports = {
  list(req, res) {
    return InvitedCandidate
      .findAll({
        where: {
          RecruiterId: req.params.RecruiterId
        }
      })
      .then((invitecands) => res.status(200).send(invitecands))
      .catch((error) => { res.status(400).send(error); });
  },

  count(req, res) {
    return InvitedCandidate
      .findAndCountAll({
        where: {
          RecruiterId: req.params.RecruiterId
        }
      })
      .then((invitecand) => res.status(200).send(invitecand))
      .catch((error) => { res.status(400).send(error); });
  }, 

  applyInvitation(req, res) {
    if(req.body.isAccepted == "true") {
      return InvitedCandidate
      .update({status:'Accepted'},
        {
          where: {
            ProfileId: req.body.ProfileId,
            RecruiterId: req.body.RecruiterId
          }
        }
        )
      .then((invitecand) => {res.status(200).send(invitecand);})
      .catch((error) => res.status(400).send(error));
    }
    else {
      return InvitedCandidate
      .update({status:'Declined'},
        {
          where: {
            ProfileId: req.body.ProfileId,
            RecruiterId: req.body.RecruiterId
          }
        }
        )
      .then((invitecand) => {res.status(200).send(invitecand);})
      .catch((error) => res.status(400).send(error));
    }    
  },
};