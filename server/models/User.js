const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
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
  },
  phone: {
    type: String,
  },
  skills: {
    type: [String],
    required: true,
    max_length: 500,
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

// Hashes Password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Checks if Password is Correct
userSchema.methods.checkPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
