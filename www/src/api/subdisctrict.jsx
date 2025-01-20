import axios from "axios";

const url = window.env.API_URL;

export const addSubdistrict = (name, description, city) => {
  return axios.post(url + "/subdistrict", {
    name: name,
    description: description,
    city: city._id,
  });
};

export const editSubdistrict = (id, name, description) => {
  return axios.put(url + "/subdistrict/" + id, {
    name: name,
    description: description,
  });
};

export const deleteSubdisctrict = (id) => {
  return axios.delete(url + "/subdistrict/" + id);
};
