var express = require('express');
var router = express.Router();


const userController = require('../controllers').user;
const roleController = require('../controllers').role;

const profileController = require('../controllers').profile;
const workexperienceController = require('../controllers').workexperience;
const orgexperienceController = require('../controllers').orgexperience;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Profile Router */
router.get('/api/profile', profileController.list);
router.get('/api/profile/:id', profileController.getById);
router.post('/api/profile', profileController.add);
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

/* User Router */
router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
router.post('/api/user', userController.add);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);

/* User Role */
router.get('/api/role', roleController.list);
router.get('/api/role/:id', roleController.getById);
router.post('/api/role', roleController.add);
router.put('/api/role/:id', roleController.update);
router.delete('/api/role/:id', roleController.delete);

/* Advance Router */
router.post('/api/role/add_user', roleController.addUser);

module.exports = router;
