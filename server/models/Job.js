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
  applicants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
