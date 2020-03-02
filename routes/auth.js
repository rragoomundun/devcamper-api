const express = require('express');
const {
  register,
  login,
  logout,
  getMe,
  updateDetails,
  forgotPassword,
  resetPassword,
  updatePassword
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middlewares/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', protect, getMe);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
