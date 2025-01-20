import { Router } from "express";
import { addCity, deleteCity, editCity, getCity, getCityById } from "../controllers/city";

export default (router: Router) => {
  router.get("/city", getCity);
  router.get("/city/:id", getCityById);
  router.post("/city", addCity);
  router.put("/city/:id", editCity);
  router.delete("/city/:id", deleteCity);
};
