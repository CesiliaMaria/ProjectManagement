const express = require("express");

const router = express.Router();

//Auth Routes
router.post("/register", registerUser); // Register User
router.post("/login", loginUser); //Login user
router.get("/profile", protect, getUserProfile); // Get user profile
router.put("/profile", protect, updateUserProfile); //Update profile

module.exports = router;