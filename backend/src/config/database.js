const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

try {
  mongoose.connect("mongodb://localhost/todoapp", {
    useNewUrlParser: true
  });
  console.log("DB CONNECTED");
} catch (error) {
  console.log("Error: ", error.message);
}

module.exports = mongoose;
