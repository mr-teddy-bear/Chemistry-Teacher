import mongoose from "mongoose";
import pkg from "mongoose";
const { Schema, model, Types } = pkg;
// import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  classStatus: [
    { title: String, subtitle: String, status: String },
    { title: String, subtitle: String, status: String },
    { title: String, subtitle: String, status: String },
    { title: String, subtitle: String, status: String },
    { title: String, subtitle: String, status: String },
    { title: String, subtitle: String, status: String },
    { title: String, subtitle: String, status: String },
  ],
});

const ChemUsers = mongoose.model("chemusers", schema);

export default ChemUsers;
