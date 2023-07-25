import express from "express";
const thoughtsRouter = express.Router();
import { 
    getAllThoughts, 
    createThought, 
    getThoughtById, 
    updateThought, 
    deleteThought, 
    addReaction, 
    deleteReaction 
} from "../controllers/thoughtsController.js";

// /api/thoughts

thoughtsRouter.get('/', getAllThoughts);
thoughtsRouter.get('/:thoughtId', getThoughtById);
thoughtsRouter.post('/add', createThought);
thoughtsRouter.put('/:thoughtId', updateThought);
thoughtsRouter.delete('/:thoughtId', deleteThought);

// /api/thoughts/:thoughtId/reactions
thoughtsRouter.post('/:thoughtId/reactions', addReaction);
thoughtsRouter.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

export default thoughtsRouter;