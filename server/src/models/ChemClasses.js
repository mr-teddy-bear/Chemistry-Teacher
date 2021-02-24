import mongoose from "mongoose";
import pkg from "mongoose";
const { Schema, model, Types } = pkg;

const schema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChemUsers",
    },
  ],
});

const ChemClasses = mongoose.model("chemclasses", schema);

export default ChemClasses;
