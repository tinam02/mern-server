import mongoose from "mongoose";

//returns promise
const connectDB = (url) => {
  return mongoose.connect(url);
};
export default connectDB;
