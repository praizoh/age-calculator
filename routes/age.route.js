const express = require("express");
const ageController = require("../controllers/age.controller");

const router = express.Router();

const {getAge} = ageController

router.get("/", getAge)

module.exports = router;