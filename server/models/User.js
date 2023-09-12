const { Schema, model } = require("mongoose");
const Job = require("./Job");

const userSchema = new Schema({
  first: {
    type: String,
    required: true,
    max_length: 50,
  },
  last: {
    type: String,
    required: true,
    max_length: 50,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  skills: {
    type: [String],
    required: true,
    max_length: 500,
  },
  expected_pay: {
    type: Number,
    max_length: 10,
  },
  savedjobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
});

userSchema
  .virtual("fullName")
  // Getter
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  // Setter to set the first and last name
  .set(function (v) {
    const first = v.split(" ")[0];
    const last = v.split(" ")[1];
    this.set({ first, last });
  });

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
