import { Router } from "express";
import province from "./province";
import city from "./city";
import subdistrict from "./subdistrict";

const router = Router();

export default (): Router => {
  province(router);
  city(router);
  subdistrict(router);

  return router;
};
