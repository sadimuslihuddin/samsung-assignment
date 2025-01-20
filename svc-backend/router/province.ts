import { Router } from "express";
import { addProvince, deleteProvince, editProvince, getProvince, getProvinceById } from "../controllers/province";

export default (router: Router) => {
  router.get("/province", getProvince);
  router.get("/province/:id", getProvinceById);
  router.post("/province", addProvince);
  router.put("/province/:id", editProvince);
  router.delete("/province/:id", deleteProvince);
};
