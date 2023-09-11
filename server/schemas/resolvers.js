const Job = require("../models/Job.js");
const Employer = require("../models/Employer");

const resolvers = {
  Query: {
    jobs: async () => {
      try {
        return await Job.find({});
      } catch (err) {
        throw new Error(err);
      }
    },
    employers: async () => {
      try {
        return await Employer.find({}).populate("jobs");
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

module.exports = resolvers;
