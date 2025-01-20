import {Schema, model} from "mongoose";

const SubdistrictSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  city: {
    type: Schema.Types.ObjectId,
    ref: "City"
  }
});

export const SubdistrictModel = model("Subdistrict", SubdistrictSchema);
