const moment = require('moment');
const AgeService = require('../services/age.service');

exports.getAge = async (req, res) => {
  const { dob } = req.query;
  const dateString = moment(dob, 'x').format('YYYY-MM-DD hh:mm:ss'); // convert timestamp to datetime
  const age = await AgeService.ageCalulator(dateString);
  res.status(200).send({ status: 200, message: 'Age gotten successfully', age });
};
