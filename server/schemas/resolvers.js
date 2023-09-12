const Job = require("../models/Job.js");
const Employer = require("../models/Employer");
const User = require("../models/User.js");

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

  Mutation: {
    // Create User
    createUser: async (_, { first, last, email, password, phone, skills }) => {
      try {
        const user = await User.create({
          first,
          last,
          email,
          password,
          phone,
          skills,
        });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw new Error(err);
      }
    },
    // Create Employer
    createEmployer: async (_, { employer_name, address, industry, size }) => {
      try {
        const employer = await Employer.create({
          employer_name,
          address,
          industry,
          size,
        });
        const token = signToken(employer);
        return { token, employer };
      } catch (err) {
        throw new Error(err);
      }
    },
    // User Login
    userLogin: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw AuthenticationError;
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw AuthenticationError;
        }

        const token = signToken(user);

        return { token, user };
      } catch (err) {
        throw new Error(err);
      }
    },
    // Employer Login
    employerLogin: async (_, { email, password }) => {
      try {
        const employer = await Employer.findOne({ email });

        if (!employer) {
          throw AuthenticationError;
        }

        const correctPw = await employer.isCorrectPassword(password);

        if (!correctPw) {
          throw AuthenticationError;
        }

        const token = signToken(employer);

        return { token, employer };
      } catch (err) {
        throw new Error(err);
      }
    },
    // Update User
    updateUser: async (
      _,
      { userId, first, last, email, password, phone, skills }
    ) => {
      try {
        return User.findByIdAndUpdate(
          { _id: userId },
          { first, last, email, password, phone, skills },
          { new: true }
        );
      } catch (err) {
        throw new Error(err);
      }
    },
    // Update Employer
    // Save Job
    saveJob: async (_, { userId, jobId }) => {
      try {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { savedjobs: { jobId } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      } catch (err) {
        throw new Error(err);
      }
    },
    // Unsave Job
    unsaveJob: async (_, { userId, jobId }) => {
      try {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $pull: { savedjobs: { jobId } },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      } catch (err) {
        throw new Error(err);
      }
    },
    // Create Job
    createJob: async (
      _,
      { title, pay, employment_type, description, location, benefits }
    ) => {
      try {
        await Employer.findOneAndUpdate(
          { _id: employerId },
          { $addToSet: { jobs: jobId } }
        );

        const newJob = await Job.create({
          title,
          pay,
          employment_type,
          description,
          location,
          benefits,
        });
      } catch (err) {
        throw new Error(err);
      }
    },
    // Update Job
    // Archive Job
  },
};

module.exports = resolvers;
