import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { DeviceShippingController } from "./deviceShipping.controller";

const router = express.Router();

router.post("/create", auth(USER_ROLE.USER), DeviceShippingController.createDeviceShipping);

router.patch("/:id", auth(USER_ROLE.USER), DeviceShippingController.updateDeviceShipping);

router.delete("/:id", auth(USER_ROLE.USER), DeviceShippingController.deleteDeviceShipping);

export const DeviceShippingRoutes = router;
