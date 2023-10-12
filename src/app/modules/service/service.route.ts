import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ServiceController } from "./service.controller";
import { ServiceValidation } from "./service.validation";

const router = express.Router();

router.post("/create", validateRequest(ServiceValidation.createService), ServiceController.createService);

router.get("/", ServiceController.getAllService);

router.get("/:id", ServiceController.getSingleService);

router.patch("/:id", validateRequest(ServiceValidation.updateService), ServiceController.updateService);

router.delete("/:id", ServiceController.deleteService);

export const ServiceRoutes = router;
