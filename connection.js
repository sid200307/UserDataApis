const mongoose = require("mongoose");
mongoose.set('strictQuery',true);
async function connectMongodb(url) {
    //Connection
    return mongoose.connect(url);
}
  module.exports ={
    connectMongodb,
  };
