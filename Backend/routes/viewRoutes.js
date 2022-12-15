const viewsController = require('../controllers/viewsController');
const express = require('express');

const router = express.Router();


router.get('/', viewsController.getIndex);
router.get('/about', viewsController.getAbout);
router.get('/contact', viewsController.getContact);
router.get('/login', viewsController.getLogin);
router.get('/signup', viewsController.getSignup);
router.get('/about-in', viewsController.aboutIn);
router.get('/conversion', viewsController.getConversion);


module.exports = router;