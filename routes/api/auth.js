const router = require('express').Router();
const authController = require('../../controllers/authController');

router.route('/login')
    .get(authController.validateUser)

router.route('/logout')
    .get(authController.removeUser)
module.exports = router;