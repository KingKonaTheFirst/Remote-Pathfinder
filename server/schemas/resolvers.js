const express = require("express");
const router = express.Router();
const Job = require("../models/jobs");
const Employer = require("../models/Employer");
// query for jobs
router.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/api/employers", async (req, res) => {
  try {
    const employers = await Employer.find({}).populate("jobs");
    res.json(employers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
