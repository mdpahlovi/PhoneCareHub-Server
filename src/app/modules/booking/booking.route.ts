import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { BookingController } from "./booking.controller";
import { BookingValidation } from "./booking.validation";

const router = express.Router();

router.post("/create", auth(USER_ROLE.USER), validateRequest(BookingValidation.createBooking), BookingController.createBooking);

router.get("/", auth(USER_ROLE.USER, USER_ROLE.ADMIN), BookingController.getAllBooking);

router.get("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), BookingController.getSingleBooking);

router.patch(
    "/:id",
    auth(USER_ROLE.USER, USER_ROLE.ADMIN),
    validateRequest(BookingValidation.updateBooking),
    BookingController.updateBooking,
);

router.delete("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN), BookingController.deleteBooking);

export const BookingRoutes = router;
