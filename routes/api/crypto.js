const router = require('express').Router();
const cryptoController = require('../../controllers/cryptoController');

router.route('/')
    .post(cryptoController.createPortfolio)

router.route('/update')
    .post(cryptoController.update)

router.route('/market')
    .get(cryptoController.marketValue)

router.route('/search')
    .post(cryptoController.searchCrypto)

router.route('/convert')
    .post(cryptoController.convertCrypto)

module.exports = router;