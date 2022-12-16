const authController=require('../controllers/authController')

const viewsController = require('../controllers/viewsController');
const express = require('express');

const router = express.Router();


router.get('/',authController.isLoggedIn, viewsController.getIndex);
router.get('/about', authController.isLoggedIn,viewsController.getAbout);
router.get('/contact', authController.isLoggedIn, viewsController.getContact);
router.get('/login', authController.isLoggedIn, viewsController.getLogin);
router.get('/signup', authController.isLoggedIn, viewsController.getSignup);
router.get('/about-in',  authController.isLoggedIn,viewsController.aboutIn);
router.get('/conversion',authController.protect, viewsController.getConversion);
router.get('/library',authController.protect, viewsController.getLibrary);
router.get('/history',authController.protect, viewsController.getHistory);


module.exports = router;