const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
    .post(userController.create)
    .get(userController.userLogin);

router.route('/email')
    .get(userController.userEmailVerification);

router.route('/username')
    .get(userController.usernameVerification);

module.exports = router;