import Thought from "../models/Thoughts.js";
import User from "../models/User.js";


export const getAllThoughts = async (req, res, next) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const createThought = async (req, res, next) => {
    const { username, thoughtText, userId } = req.body;
    const thought = new Thought({
        username,
        thoughtText,
        userId,
    });
    try {
        const savedThought = await thought.save();

        const user = await User.findById(userId);
        if(!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }
        user.thoughts.push(savedThought._id);
        await user.save();

        return res.json(savedThought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const getThoughtById = async (req, res, next) => {
    const { thoughtId } = req.params;
    try {
        const thought = await Thought.findById(thoughtId);
        return res.json(thought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const updateThought = async (req, res, next) => {
    const { thoughtId } = req.params;
    const { thoughtText } = req.body;
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            thoughtId,
            { thoughtText },
            { new: true }
        );
        return res.json(updatedThought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const deleteThought = async (req, res, next) => {
    const { thoughtId } = req.params.thoughtId;
    try {
        const deletedThought = await Thought.findByIdAndDelete(thoughtId);
        return res.json(deletedThought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const addReaction = async (req, res, next) => {
    try {
        const newReaction = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: req.body } },
            { new: true }
        );
        return res.json(newReaction);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);    
    }
};

export const deleteReaction = async (req, res, next) => {
    try {
        const deletedReaction = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        return res.json({message: 'Reaction deleted'});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};