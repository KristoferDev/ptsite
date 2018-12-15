const path = require('path');
const express = require('express');

const pageController = require('../controllers/page');

const router = express.Router();

router.get('/', pageController.getHome);
router.get('/ommig', pageController.getAbout);
router.get('/traning', pageController.getWorkout);
router.get('/kontakt', pageController.getContact);

module.exports = router;