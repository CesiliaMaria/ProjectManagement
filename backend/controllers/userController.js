const Task = require("../models/Tasks");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//@desc   Get all users(Admin only)
//@route  Get /api/users/
//@access Private (Admin)
const getUser = async (req, res) =>{
  try{
    const users = await User.find({role:'member'}).select("-password");

    //Add task counts to each user
    const usersWithTaskCounts = await Promise.all(users.map(async (user)=>{
      const pendingTasks = await Task.countDocuments({assignedTo: user._id, status: "Pending"});
      const inProgressTasks = await Task.countDocuments({assignedTo: user._id, status: "in Progress"});
      const completedTasks = await Task.countDocuments({assignedTo: user._id, status: "Completed"});

      return{
        ...user._doc, //include all existing user data
        pendingTasks,
        inProgressTasks,
        completedTasks,
      };
    }));

    res.json(usersWithTaskCounts);
  }catch(error){
    res.status(500).json({message: "Server error", error: error.message});
  }
}

//@desc   Get user by ID
//@route  Get /api/users/:id
//@access Private 
const getUserById = async (req,res) =>{
  try{
    const user = await User.findById(req.params.id).select("-password");
      if(!user) return res.status(404).json({message: "User not found"});
      res.json(user);
  }catch(error){
    res.status(500).json({message: "Server error", error: error.message});
  }
};

//@desc   Delete a users(Admin only)
//@route  Delete /api/users/:id
//@access Private (Admin)
// const deleteUser = async(req, res) =>{
//   try{

//   }catch(error){
//     res.status(500).json({message: "Server error", error: error.message});
//   }
// };

module.exports = {getUser, getUserById};