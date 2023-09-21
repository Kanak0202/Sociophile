import express from "express";
import { verify_token } from "../middleware/auth.js";

//controllers
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/users.js";

const router = express.Router();

/*READ */
router.get("/:id",verify_token, getUser);
router.get("/:id/friends",verify_token, getUserFriends);

/*UPDATE */
router.patch("/:id/:friendId", verify_token, addRemoveFriend);

export default router;