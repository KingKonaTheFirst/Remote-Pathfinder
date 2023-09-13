const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  pay: {
    type: Number,
    required: true,
  },
  employment_type: {
    type: String,
    enum: ["part-time", "full-time"],
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  benefits: {
    type: String,
    required: true,
    trim: true,
  },
  employerId: {
    type: Schema.Types.ObjectId,
    ref: "Employer",
  },
  applicants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  archived: { type: Boolean, default: false },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
