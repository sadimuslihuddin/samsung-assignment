import { Router } from "express";
import { addSubdistrict, deleteSubdistrict, editSubdistrict, getSubdistrict, getSubdistrictById } from "../controllers/subdistrict";

export default (router: Router) => {
  router.get("/subdistrict", getSubdistrict);
  router.get("/subdistrict/:id", getSubdistrictById);
  router.post("/subdistrict", addSubdistrict);
  router.put("/subdistrict/:id", editSubdistrict);
  router.delete("/subdistrict/:id", deleteSubdistrict);
};
