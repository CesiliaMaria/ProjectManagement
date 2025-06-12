const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { getUser, getUserById, deleteUser } = require("../controllers/userController");

const router = express.Router();

//User Management Routes
router.get("/", protect, adminOnly, getUser); //get all users (admin only)
router.get("/:id", protect, getUserById); // get a spesific user
// router.delete("/:id", protect, adminOnly, deleteUser); 
// Delete user (admin only)

module.exports = router;