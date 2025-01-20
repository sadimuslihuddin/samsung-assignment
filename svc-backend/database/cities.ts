import {Schema, model} from "mongoose";

const CitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  province: {
    type: Schema.Types.ObjectId,
    ref: "Province"
  },
  subdistricts: [{
    type: Schema.Types.ObjectId,
    ref: "Subdistrict"
  }]
});

export const CityModel = model("City", CitySchema);

export const getCity = () => CityModel.find();
export const getCityById = (id: string) => CityModel.findById(id);
export const createCity = (values: Record<string, any>) =>
  new CityModel(values).save().then((city) => city.toObject());
