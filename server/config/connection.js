const { connect, connection } = require('mongoose');
require('dotenv').config();

connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/remotepfDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log("Connected to MongoDB!");
});

module.exports = connection;
