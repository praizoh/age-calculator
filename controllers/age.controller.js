const AgeService = require("../services/age.service");
const { dobValidator } = require("../validators/rules")

exports.getAge = async ( req, res ) => {
    try {
        const { error } = dobValidator(req.query);

        if (error) {
            const { details } = error;
            const message = details.map((i) => i.message).join(",");
            return res.status(400).send({
                status:400,
                message,
                data:null
            });
        }

        const { dob } = req.query;
        const age = await AgeService.ageCalulator(dob);
        res.status(200).send({ status:200, message:"Age gotten successfully", age })
    }catch(error){
        res.status(500).send({error});
    }
}