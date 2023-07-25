import express from "express";
const thoughtsRouter = express.Router();
import { getAllThoughts, createThought, getThoughtById, updateThought, deleteThought } from "../controllers/thoughtsController.js";

thoughtsRouter.get('/', getAllThoughts);
thoughtsRouter.get('/:thoughtId', getThoughtById);
thoughtsRouter.post('/add', createThought);
thoughtsRouter.put('/:thoughtId', updateThought);
thoughtsRouter.delete('/:thoughtId', deleteThought);

export default thoughtsRouter;