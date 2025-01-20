import axios from "axios";

const url = window.env.API_URL;

export const getCityById = (id) => {
  return axios.get(url + "/city/" + id);
};

export const addCity = (name, description, province) => {
  return axios.post(url + "/city", {
    name: name,
    description: description,
    province: province._id,
  });
};

export const editCity = (id, name, description) => {
  return axios.put(url + "/city/" + id, {
    name: name,
    description: description,
  });
};

export const deleteCity = (id) => {
  return axios.delete(url + "/city/" + id);
};
