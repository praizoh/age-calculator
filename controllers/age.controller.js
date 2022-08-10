const AgeService = require("../services/age.service");

exports.getAge = async ( req, res ) => {
    try {
        const { dob } = req.query;
        const age = await AgeService.ageCalulator(dob);
        res.status(200).send({ age })
    }catch(error){
        console.log(error);
        res.status(500).send({error});
    }
}