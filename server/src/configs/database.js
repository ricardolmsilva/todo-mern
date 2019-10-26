const mongoose = require("mongoose");
require("dotenv").config();

const MongoURI =
  "mongodb://ricardo:ricardo@cluster0-shard-00-00-u2zrg.mongodb.net:27017,cluster0-shard-00-01-u2zrg.mongodb.net:27017,cluster0-shard-00-02-u2zrg.mongodb.net:27017/todos?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports = (function connectDB() {
  try {
    mongoose.connect(MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
    setTimeout(connectDB, 5000);
  }
})();
