const express = require('express');
const router = express.Router();

router.use('/api', require('./api'));
router.use('/auth', require('./api/auth.js'))

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;