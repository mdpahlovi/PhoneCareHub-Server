import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { ServiceRoutes } from "../modules/service/service.route";

const router = express.Router();

const moduleRoutes = [
    {
        path: "/auth",
        route: AuthRoutes,
    },
    {
        path: "/service",
        route: ServiceRoutes,
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
