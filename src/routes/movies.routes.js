import express from "express";
import MovieController from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/", MovieController.findAll);
router.post("/", MovieController.create);

export default router;