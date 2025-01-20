import { Schema, model } from "mongoose";

const ProvinceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  cities: [{
    type: Schema.Types.ObjectId,
    ref: 'City'
  }]
});

export const ProvinceModel = model("Province", ProvinceSchema);
