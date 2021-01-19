const router = require('express').Router();
const userRoutes = require('./users');
const cryptoRoutes = require('./crypto');

router.use('/crypto', cryptoRoutes);
router.use('/users', userRoutes);


module.exports = router;