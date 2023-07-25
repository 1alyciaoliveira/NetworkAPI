import User from "../models/User.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const createUser = async (req, res, next) => {
    const { username, email } = req.body;
    const user = new User({
        username,
        email,
    });
    try {
        const savedUser = await user.save();
        return res.json(savedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            { runValidators: true, new: true }
        );
        if (!updateUser) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        res.json(updateUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        res.json(deletedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const addFriend = async (req, res, next) => {
    try {
        const newFriend = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.params.friendId}},
            {new: true },

        );
        if (!newFriend) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        res.json(newFriend);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const removeFriend = async (req, res, next) => {
    try {
        const removedFriend = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId}},
            {new: true},
        );
        if (!removedFriend) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        res.json(removedFriend);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};