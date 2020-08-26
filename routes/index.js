var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;
const roleController = require('../controllers').role;

const profileController = require('../controllers').profile;
const workexperienceController = require('../controllers').workexperience;
const orgexperienceController = require('../controllers').orgexperience;
const educationController = require('../controllers').education;
const skillController = require('../controllers').skill;
const certificateController = require('../controllers').certificate;
const achievementController = require('../controllers').achievement;
const sociallinkController = require('../controllers').sociallink;
const attachmentController = require('../controllers').attachment;

const recruiterController = require('../controllers').recruiter;
const jobController = require('../controllers').job;

const savedjobController = require('../controllers').savedjob;
const appliedjobController = require('../controllers').appliedjob;

const savedcandidateController = require('../controllers').savedcandidate;
const invitedcandidateController = require('../controllers').invitedcandidate;

const profiletagController = require('../controllers').profiletag;
const jobtagController = require('../controllers').jobtag;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Profile Router */
router.get('/api/profile', profileController.list);
router.get('/api/profile/:id', profileController.getById);
router.post('/api/profile', profileController.add);
router.post('/api/profile/:id/applyJob', profileController.applyJob);
router.put('/api/profile/:id', profileController.update);
router.delete('/api/profile/:id', profileController.delete);

/* Work Experince Router inside Profile */
router.get('/api/workexperience', workexperienceController.list);
router.get('/api/workexperience/:id', workexperienceController.getById);
router.post('/api/workexperience', workexperienceController.add);
router.put('/api/workexperience/:id', workexperienceController.update);
router.delete('/api/workexperience/:id', workexperienceController.delete);

/* Org Experince Router inside Profile */
router.get('/api/orgexperience', orgexperienceController.list);
router.get('/api/orgexperience/:id', orgexperienceController.getById);
router.post('/api/orgexperience', orgexperienceController.add);
router.put('/api/orgexperience/:id', orgexperienceController.update);
router.delete('/api/orgexperience/:id', orgexperienceController.delete);

/* Education Router inside Profile */
router.get('/api/education', educationController.list);
router.get('/api/education/:id', educationController.getById);
router.post('/api/education', educationController.add);
router.put('/api/education/:id', educationController.update);
router.delete('/api/education/:id', educationController.delete);

/* Skill Router inside Profile */
router.get('/api/skill', skillController.list);
router.get('/api/skill/:id', skillController.getById);
router.post('/api/skill', skillController.add);
router.put('/api/skill/:id', skillController.update);
router.delete('/api/skill/:id', skillController.delete);

/* Certificate Router inside Profile */
router.get('/api/certificate', certificateController.list);
router.get('/api/certificate/:id', certificateController.getById);
router.post('/api/certificate', certificateController.add);
router.put('/api/certificate/:id', certificateController.update);
router.delete('/api/certificate/:id', certificateController.delete);

/* Achievement Router inside Profile */
router.get('/api/achievement', achievementController.list);
router.get('/api/achievement/:id', achievementController.getById);
router.post('/api/achievement', achievementController.add);
router.put('/api/achievement/:id', achievementController.update);
router.delete('/api/achievement/:id', achievementController.delete);

/* Social Link Router inside Profile */
router.get('/api/sociallink', sociallinkController.list);
router.get('/api/sociallink/:id', sociallinkController.getById);
router.post('/api/sociallink', sociallinkController.add);
router.put('/api/sociallink/:id', sociallinkController.update);
router.delete('/api/sociallink/:id', sociallinkController.delete);

/* Attachment Router inside Profile */
router.get('/api/attachment', attachmentController.list);
router.get('/api/attachment/:id', attachmentController.getById);
router.post('/api/attachment', attachmentController.add);
router.put('/api/attachment/:id', attachmentController.update);
router.delete('/api/attachment/:id', attachmentController.delete);

/* User Router */
router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
router.post('/api/user/register', userController.register); //Register
router.post('/api/user/login', userController.login); //Login
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);

/* User Role */
router.get('/api/role', roleController.list);
router.get('/api/role/:id', roleController.getById);
router.post('/api/role', roleController.add);
router.put('/api/role/:id', roleController.update);
router.delete('/api/role/:id', roleController.delete);

/* Recruiter Router */
router.get('/api/recruiter', recruiterController.list);
router.get('/api/recruiter/:id', recruiterController.getById);
router.post('/api/recruiter', recruiterController.add);
router.post('/api/recruiter/:id/inviteCandidate', recruiterController.inviteCandidate);
router.put('/api/recruiter/:id', recruiterController.update);
router.delete('/api/recruiter/:id', recruiterController.delete);

/* Jobs Router */
router.get('/api/job', jobController.list);
router.get('/api/job/:id', jobController.getById);
router.post('/api/job', jobController.add);
router.put('/api/job/:id', jobController.update);
router.delete('/api/job/:id', jobController.delete);

/*Saved Jobs Router */
router.get('/api/savedjob/list/:ProfileId', savedjobController.list);
router.get('/api/savedjob/count/:ProfileId', savedjobController.count);

/*Applied Jobs Router */
router.get('/api/appliedjob/list/:ProfileId', appliedjobController.list);
router.get('/api/appliedjob/count/:ProfileId', appliedjobController.count);
router.post('/api/appliedjob/applyProfile', appliedjobController.applyProfile);

/*Saved Candidate Router */
router.get('/api/savedcandidate/list/:RecruiterId', savedcandidateController.list);
router.get('/api/savedcandidate/count/:RecruiterId', savedcandidateController.count);

/*Invited Candidate Router */
router.get('/api/invitedcandidate/list/:RecruiterId', invitedcandidateController.list);
router.get('/api/invitedcandidate/count/:RecruiterId', invitedcandidateController.count);
router.post('/api/invitedcandidate/applyInvitation', invitedcandidateController.applyInvitation);


/*Profile Tag Router */
router.get('/api/profiletag/listcareer', profiletagController.listcareer);
router.get('/api/profiletag/listlocation', profiletagController.listlocation);
router.get('/api/profiletag/listeducation', profiletagController.listeducation);
router.get('/api/profiletag/listexperience', profiletagController.listexperience);

/*Job Tag Router */
router.get('/api/jobtag/listcareer', jobtagController.listcareer);
router.get('/api/jobtag/listlocation', jobtagController.listlocation);
router.get('/api/jobtag/listeducation', jobtagController.listeducation);
router.get('/api/jobtag/listexperience', jobtagController.listexperience);
router.get('/api/jobtag/listsalary', jobtagController.listsalary);

/* Advance Router */
router.post('/api/role/add_user', roleController.addUser);

module.exports = router;
