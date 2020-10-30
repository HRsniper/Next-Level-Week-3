import { Request, Response, Router } from "express";
import multer from "multer";

import { orphanagesController } from "./controllers/OrphanagesController";
import { imageUploadConfig } from "./config/ImageUploadConfig";
import { usersController } from "./controllers/UsersController";
import { auth } from "./auth/auth";
import { authMiddleware } from "./middlewares/authMiddleware";

export const routes = Router();
const imageUpload = multer(imageUploadConfig);

routes.get("/", (request: Request, response: Response) => {
    return response.status(200).json({ Server: "OK" });
});

routes.get("/orphanages", orphanagesController.index);
routes.get("/orphanages/:id", orphanagesController.show);
routes.post(
    "/orphanages",
    imageUpload.array("images"),
    orphanagesController.create
);
routes.get("/orphanages_pending", orphanagesController.pending);
routes.get("/orphanages_cadastre", orphanagesController.cadastre);

routes.post("/users", usersController.create);
routes.get("/users", usersController.index);
routes.get("/users/:id", usersController.show);

routes.post("/auth", auth.authenticate);
routes.get("/auth", authMiddleware, auth.index);
