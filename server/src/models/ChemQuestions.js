import mongoose from "mongoose";
import pkg from "mongoose";
const { Schema, model, Types } = pkg;

const schema = new Schema({
  number: { type: Number, required: true },
  descr: { type: String, required: true },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: "ChemThemes" },
  answer: { type: String, required: true },
});

const ChemQuestions = mongoose.model("chemquestions", schema);

export default ChemQuestions;
