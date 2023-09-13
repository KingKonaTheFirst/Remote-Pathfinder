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

  // Need Mutation for User's to Apply
  Mutation: {
    // Create User
    // This works!
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
    // This works!
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
    // Need to Fix Authentication
    // It's giving me false for correctPw, even when it's correct
    userLogin: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        console.log(user);

        if (!user) {
          throw AuthenticationError;
        }

        console.log(user.password);
        const correctPw = await user.checkPassword(password);
        console.log(correctPw);

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
    // This works!
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
    // This kind of works! I get an error on GraphQL, but it adds to the array on Compass
    // Saying it Cannot return null for non-nullable field Job.title
    saveJob: async (_, { userId, jobId }) => {
      try {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { savedjobs: jobId },
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
    // This works!
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
    // This works!
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
    // This works!
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
    // Archive Job
    // Should I make another array for the Employer, one for an Archived Jobs?
  },
};

module.exports = resolvers;
