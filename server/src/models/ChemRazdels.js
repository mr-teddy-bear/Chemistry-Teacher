import mongoose from "mongoose";
import pkg from "mongoose";
const { Schema, model, Types } = pkg;

const schema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  userInfo: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "ChemUsers" },
      status: { type: String, default: "disabled" },
    },
  ],
});

const ChemRazdels = mongoose.model("chemrazdels", schema);

export default ChemRazdels;
