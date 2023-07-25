import Thought from "../models/Thoughts.js";


export const getAllThoughts = async (req, res, next) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const createThought = async (req, res, next) => {
    const { username, thoughtText } = req.body;
    const thought = new Thought({
        username,
        thoughtText,
    });
    try {
        const savedThought = await thought.save();
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
    const { thoughtId } = req.params;
    try {
        const deletedThought = await Thought.findByIdAndDelete(thoughtId);
        return res.json(deletedThought);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};