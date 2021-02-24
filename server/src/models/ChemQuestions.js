import mongoose from "mongoose";
import pkg from "mongoose";
const { Schema, model, Types } = pkg;

const schema = new Schema({
  number: { type: Number, required: true },
  descr: { type: String, required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: "ChemClasses" },
  answers: { type: Array, required: true },
});

const ChemQuestions = mongoose.model("chemquestions", schema);

export default ChemQuestions;
