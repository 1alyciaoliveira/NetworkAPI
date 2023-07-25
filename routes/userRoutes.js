import express from "express";
import { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser,
    addFriend,
    removeFriend
} from "../controllers/userController.js";

const router = express.Router();

// /api/users

router.get('/', getAllUsers);
router.get('/:userId', getUserById);
router.post('/add', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

// /api/users/:userId/friends/:friendId
router.post('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
router.delete('/:userId/friends/:friendId').delete(removeFriend);


export default router;