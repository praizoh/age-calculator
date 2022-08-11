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
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    statusCode: 429,
    keyGenerator: function (req) {
        return req.headers["x-forwarded-for"] || req.connection.remoteAddress; 
    }
});

router.use(limiter)

const { getAge } = ageController;

router.get("/", getAge)

module.exports = router;