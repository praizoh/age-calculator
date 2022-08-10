class AgeService {
    static async ageCalulator(dob) {
      try {
        return Math.floor((Date.now() - new Date(dob).getTime()) / (1000 * 3600 * 24 * 365));
      } catch (error) {
        throw error;
      }
    }
}

module.exports = AgeService;
