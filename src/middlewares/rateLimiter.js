const rateLimit = require('express-rate-limit');

// Initialize Limiter
const limiter = rateLimit({
  windowMs: 1 * 1000, // 1 sec window
  max: 3, // start blocking after 3 requests
  message: {
    status: 429,
    error: 'You are doing that too much. Please try again in 10 minutes.',
  },
  statusCode: 429,
});
module.exports = limiter;
