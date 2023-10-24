import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { DeviceShippingController } from "./deviceShipping.controller";

const router = express.Router();

router.post("/create", auth(USER_ROLE.USER), DeviceShippingController.createDeviceShipping);

export const DeviceShippingRoutes = router;
