import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema(
  {
    phone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Phone || mongoose.model("Phone", phoneSchema);
