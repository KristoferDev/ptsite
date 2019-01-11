const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/login', adminController.getLogin);
router.get('/signup', adminController.getSignup);
router.post('/signup', adminController.postSignup);
router.get('/admin', adminController.getAdmin);
router.post('/admin', adminController.postAdmin);
module.exports = router;
