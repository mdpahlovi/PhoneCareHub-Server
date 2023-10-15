import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { OnlineBookingController } from "./onlineBooking.controller";

const router = express.Router();

router.post("/create", auth(USER_ROLE.USER), OnlineBookingController.createOnlineBooking);

router.get("/", auth(USER_ROLE.USER, USER_ROLE.ADMIN), OnlineBookingController.getAllOnlineBooking);

router.get("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), OnlineBookingController.getSingleOnlineBooking);

router.patch("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), OnlineBookingController.updateOnlineBooking);

router.delete("/:id", auth(USER_ROLE.ADMIN), OnlineBookingController.deleteOnlineBooking);

export const OnlineBookingRoutes = router;
