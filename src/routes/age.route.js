const express = require('express');
const ageController = require('../controllers/age.controller');

const router = express.Router();
const { limiter } = require('../middlewares');
const { joiMiddleware } = require('../middlewares');
const { dobValidator } = require('../validators/rules');

const { getAge } = ageController;

router.use(limiter);

router.get('/', joiMiddleware(dobValidator), getAge);

module.exports = router;
