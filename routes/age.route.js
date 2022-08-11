const express = require("express");
const ageController = require("../controllers/age.controller");
const router = express.Router();
// const { limiter } = require("../middlewares");

const rateLimit = require('express-rate-limit');

// Initialize Limiter
const limiter = rateLimit({
    windowMs: 1000, // 1 sec window
    max: 3, // start blocking after 3 requests
    message: "Too many requests created from this IP, please try again after 30 secs",
    
});

const { getAge } = ageController;

router.get("/", limiter, getAge)

module.exports = router;