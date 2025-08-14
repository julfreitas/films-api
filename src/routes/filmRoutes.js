import { Router } from "express";
import * as filmController from "../controllers/filmController.js";

const router = Router();

// Middleware para tratar erros async
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.get("/", asyncHandler(filmController.getAllFilms));
router.get("/:id", asyncHandler(filmController.getFilmById));
router.post("/", asyncHandler(filmController.createFilm));
router.delete("/:id", asyncHandler(filmController.deleteFilm));
router.put("/:id", asyncHandler(filmController.updateFilm));

export default router;
