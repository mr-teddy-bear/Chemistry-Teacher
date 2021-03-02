import mongoose from "mongoose";
import pkg from "mongoose";
const { Schema, model, Types } = pkg;

const schema = new Schema({
  title: { type: String, required: true },
  number: { type: Number, required: true },
  razdelId: { type: mongoose.Schema.Types.ObjectId, ref: "ChemRazdels" },
});

const ChemThemes = mongoose.model("chemthemes", schema);

export default ChemThemes;
