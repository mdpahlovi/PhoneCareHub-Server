import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { PaymentController } from "./payment.controller";

const router = express.Router();

router.post("/create", auth(USER_ROLE.USER), PaymentController.createPayment);

router.patch("/:id", auth(USER_ROLE.USER), PaymentController.updatePayment);

router.delete("/:id", auth(USER_ROLE.USER), PaymentController.deletePayment);

export const PaymentRoutes = router;
