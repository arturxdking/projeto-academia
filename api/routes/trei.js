import express from "express";
import { addTrei, deleteTrei, getTrei, updateTrei } from "../controllers/trei.js";

const router = express.Router()

router.get("/", getTrei)

router.post("/", addTrei)

router.put("/:id", updateTrei)

router.delete("/:id", deleteTrei)

export default router