import { Schema } from "mongoose";

let userSchema = Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  
});

export default userSchema;