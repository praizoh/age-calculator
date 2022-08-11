const rateLimit = require('express-rate-limit');

// Initialize Limiter
const limiter = rateLimit({
    windowMs: 1 * 1000, // 1 sec window
    max: 0, // start blocking after 3 requests
    message: "Too many requests created from this IP, please try again after 30 secs",
    statusCode: 429,
});
module.exports = limiter;
  