const express = require('express');

const router = express.Router();
const ageRoutes = require('./age.route');

router.use('/howold', ageRoutes);

module.exports = router;
