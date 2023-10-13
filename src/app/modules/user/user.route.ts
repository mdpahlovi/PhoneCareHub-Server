import express from "express";
import { USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", auth(USER_ROLE.ADMIN, USER_ROLE.SUPERADMIN), UserController.getAllUser);

router.get("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN, USER_ROLE.SUPERADMIN), UserController.getSingleUser);

router.patch("/:id", auth(USER_ROLE.USER, USER_ROLE.ADMIN, USER_ROLE.SUPERADMIN), UserController.updateUser);

router.delete("/:id", auth(USER_ROLE.ADMIN, USER_ROLE.SUPERADMIN), UserController.deleteUser);

export const UserRoutes = router;
