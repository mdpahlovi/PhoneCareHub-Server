import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { DeviceReturnedController } from "./deviceReturned.controller";

const router = express.Router();

router.post("/create", auth(USER_ROLE.USER), DeviceReturnedController.createDeviceReturned);

router.patch("/:id", auth(USER_ROLE.USER), DeviceReturnedController.updateDeviceReturned);

router.delete("/:id", auth(USER_ROLE.USER), DeviceReturnedController.deleteDeviceReturned);

export const DeviceReturnedRoutes = router;
