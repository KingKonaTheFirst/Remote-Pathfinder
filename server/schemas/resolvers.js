const Job = require("../models/Job.js");
const Employer = require("../models/Employer");
const User = require("../models/User.js");
const { signToken, AuthenticationError } = require("../utils/auth.js");

const resolvers = {
  // Need Query to Get All User's that Apply
  Query: {
    // Single User
    user: async (_, { userId }) => {
      try {
        return User.findOne({ _id: userId });
      } catch (err) {
        throw new Error(err);
      }
    },
    // Single Job
    job: async (_, { jobId }) => {
      try {
        return Job.findOne({ _id: jobId });
      } catch (err) {
        throw new Error(err);
      }
    },
    // Single Employer
    employer: async (_, { employerId }) => {
      try {
        return Employer.findOne({ _id: employerId });
      } catch (err) {
        throw new Error(err);
      }
    },

    // All Jobs
    jobs: async () => {
      try {
        return await Job.find({});
      } catch (err) {
        throw new Error(err);
      }
    },

    // All Employers
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
    createEmployer: async (
      _,
      { employer_name, email, password, address, industry, size, jobs }
    ) => {
      try {
        const employer = await Employer.create({
          employer_name,
          email,
          password,
          address,
          industry,
          size,
          jobs,
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
        console.log(user);

        if (!user) {
          throw AuthenticationError;
        }

        const correctPw = await user.checkPassword(password);

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
    updateEmployer: async (
      _,
      { employerId, employer_name, email, password, address, industry, size }
    ) => {
      try {
        return Employer.findByIdAndUpdate(
          { _id: employerId },
          { employer_name, email, password, address, industry, size },
          { new: true }
        );
      } catch (err) {
        throw new Error(err);
      }
    },
    // Save Job
    saveJob: async (_, { userId, jobId }) => {
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { savedjobs: jobId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return updatedUser;
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
            $pull: { savedjobs: jobId },
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
      {
        title,
        pay,
        employment_type,
        description,
        location,
        benefits,
        employerId,
      }
    ) => {
      try {
        const newJob = await Job.create({
          title,
          pay,
          employment_type,
          description,
          location,
          benefits,
          employerId,
        });

        const employerData = await Employer.findOneAndUpdate(
          { _id: employerId },
          { $addToSet: { jobs: newJob._id } },
          { new: true }
        );

        return newJob;
      } catch (err) {
        throw new Error(err);
      }
    },
    // Update Job
    updateJob: async (
      _,
      { jobId, title, pay, employment_type, description, location, benefits }
    ) => {
      try {
        return Job.findByIdAndUpdate(
          { _id: jobId },
          { title, pay, employment_type, description, location, benefits },
          { new: true }
        );
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

module.exports = resolvers;
