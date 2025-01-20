import { deleteCity } from "../api/city";
import { deleteProvince } from "../api/province";
import { deleteSubdisctrict } from "../api/subdisctrict";

export const deleteByType = (type, id) => {
  switch (type) {
    case "province":
      return deleteProvince(id);
    case "city":
      return deleteCity(id);
    case "subdistrict":
      return deleteSubdisctrict(id);
    default:
      return;
  }
};
