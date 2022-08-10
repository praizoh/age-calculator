class AgeService {
    static async ageCalulator(dob) {
        try {
          return dob;
        } catch (error) {
          throw error;
        }
    }
}

module.exports = AgeService;
