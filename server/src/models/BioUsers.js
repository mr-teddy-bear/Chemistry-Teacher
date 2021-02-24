import mongoose from "mongoose";
import pkg from "mongoose";
const { Schema, model, Types } = pkg;

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  classStatus: {
    title: String,
    subtitle: String,
    status: String,
  },
});

const BioUsers = mongoose.model("biousers", schema);

export default BioUsers;
