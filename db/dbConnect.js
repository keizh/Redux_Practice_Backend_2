require("dotenv").config();
const mongoose = require(`mongoose`);
async function dbConnect() {
  try {
    const dbObject = await mongoose.connect(process.env.MONGODB);
    if (dbObject) {
      console.log(`DataBase connection has been established`);
    } else {
      console.log(`Failed to establish Database connection`);
    }
  } catch (err) {
    console.log(`error : ${err.message}`);
  }
}

module.exports = dbConnect;
