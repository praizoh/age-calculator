const moment = require('moment');

class AgeService {
  static async ageCalulator(dob) {
    return moment(dob, 'YYYY-MM-DD').fromNow().split(' ')[0];
  }
}

module.exports = AgeService;
