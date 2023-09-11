const mongoose = require("mongoose");
// NEED TO IMPORT JOB SCHEMA

const employerSchema = new mongoose.Schema({
  employer_name: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
  },
  industry: {
    type: String,
    required: true,
    enum: [
      "Technology",
      "Finance",
      "Healthcare",
      "Education",
      "Manufacturing",
      "Retail",
      "Hospitality",
      "Marketing",
      "Media",
      "Telecommunications",
      "Consulting",
      "Transportation",
      "Real Estate",
      "Non-Profit",
      "Government",
      "Agriculture",
      "Energy",
      "Entertainment",
      "Automotive",
      "Construction",
      "Fashion",
      "Fitness",
      "Legal",
      "Travel",
      "Other",
    ],
  },
  size: {
    type: String,
    required: true,
    enum: [
      "Small (1-50)",
      "Medium (51-200)",
      "Large (201-1000)",
      "Enterprise (1001+)",
      "Startup (1-10)",
      "Mid-Sized (11-100)",
    ],
  },
  // NEED TO IMPORT & USE Job Schema
  jobs: [jobSchema],
});

const Employer = mongoose.model("Employer", employerSchema);

module.exports = Employer;
