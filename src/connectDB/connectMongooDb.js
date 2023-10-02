
import mongoose from "mongoose";

let connectDb=()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/nodeTaskDb")
    console.log("db connection established successfully")
}
export default connectDb