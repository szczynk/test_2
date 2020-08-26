const role = require('./role');
const user = require('./user');

const profile = require('./profile');
const workexperience = require('./workexperience');
const orgexperience = require('./orgexperience');
const education = require('./education');
const skill = require('./skill');
const certificate = require('./certificate');
const achievement = require('./achievement');
const sociallink = require('./sociallink');
const attachment = require('./attachment');

const recruiter = require('./recruiter');
const job = require('./job');

const savedjob = require('./savedjob');
const appliedjob = require('./appliedjob');

const savedcandidate = require('./savedcandidate');
const invitedcandidate = require('./invitedcandidate');

const profiletag = require('./profiletag');
const jobtag = require('./jobtag');

module.exports = {
  profile,
  role,
  user,
  workexperience,
  orgexperience,
  education,
  skill,
  certificate,
  achievement,
  sociallink,
  attachment,
  recruiter,
  job,
  savedjob,
  savedcandidate,
  profiletag,
  jobtag,
  appliedjob,
  invitedcandidate
};