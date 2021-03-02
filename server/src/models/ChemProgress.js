import mongoose from "mongoose";
import pkg from "mongoose";
const { Schema, model, Types } = pkg;

const schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "ChemUsers" },
  testStatus: {
    test: { type: mongoose.Schema.Types.ObjectId, ref: "ChemThemes" },
    status: { type: String, default: "disabled" },
  },
});

const ChemProgress = mongoose.model("chemprogress", schema);

export default ChemProgress;
