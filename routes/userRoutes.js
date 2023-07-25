import express from "express";
import { getAllUsers, getUserById, createUser } from "../controllers/userController.js";

const router = express.Router();



router.get('/', getAllUsers);

router.get('/:userId', getUserById);

router.post('/', createUser);

// /api/users
//router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
//router.route('/:userId').get(getUserById).delete(removeUser).put(updateUser);

// /api/users/:userId/friends/:friendId
//router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


export default router;