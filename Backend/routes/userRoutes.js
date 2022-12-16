const express = require('express');
const authController = require('../controllers/authController');
const faviconController= require('../controllers/faviconController')
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/uploads', /*faviconController.uploads,*/faviconController.generateFavicon);
module.exports = router;