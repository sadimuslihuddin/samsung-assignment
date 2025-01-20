import axios from "axios";
import env from "react-dotenv";
const url = window.env.API_URL;

export const getProvince = () => {
  return axios.get(url + "/province");
};

export const addProvince = (name, description) => {
  return axios.post(url + "/province", {
    name: name,
    description: description,
  });
};

export const editProvince = (id, name, description) => {
  return axios.put(url + "/province/" + id, {
    name: name,
    description: description,
  });
};

export const deleteProvince = (id) => {
  return axios.delete(url + "/province/" + id);
};
