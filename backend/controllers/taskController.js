const Task = require("../models/Tasks");

//@desc Get all tasks (Admin: all, User: only assigned tasks)
//@route  Get /api/tasks/
//@access Private
const getTasks = async (req,res) => {
  try{

  }catch(error){
    res.status(500).json({message: "Server error", error: error.message});
  }
};

//@desc Get task by ID
//@route  Get /api/tasks/:id
//@access Private
const getTaskById = async (req,res) => {try{

  }catch(error){
    res.status(500).json({message: "Server error", error: error.message});
  }
};

//@desc Create a new task (Admin only)
//@route  POST /api/tasks/
//@access Private
const createTask = async (req,res) => {
  try{

  }catch(error){
    res.status(500).json({message: "Server error", error: error.message});
  }
};

//@desc Update task details
//@route  PUT /api/tasks/:id
//@access Private
const updateTask = async (req,res) => {try{

  }catch(error){
    res.status(500).json({message: "Server error", error: error.message});
  }
};

//@desc Delete a tasks (Admin only)
//@route  Delete /api/tasks/:id
//@access Private (Admin)
const deleteTask = async (req,res) =>{try{

  }catch(error){
    res.status(500).json({message: "Server error", error: error.message});
  }
};

//@desc Update task status 
//@route  PUT /api/tasks/:id/status
//@access Private
const updateTaskStatus = async (req, res) => {try{

  }catch(error){
    res.status(500).json({message: "Server error", error: error.message});
  }
};


//@desc Update task checklist
//@route  PUT /api/tasks/:id/todo
//@access Private
const updateTaskChecklist = async (req, res) => {try{

  }catch(error){
    res.status(500).json({message: "Server error", error: error.message});
  }
};

//@desc Dashboard Data (Admin only)
//@route  Get /api/tasks/dashboard-data
//@access Private
const getDashboardData = async (req, res) => {try{

  }catch(error){
    res.status(500).json({message: "Server error", error: error.message});
  }
};

//@desc Dashboard Data (User-spesific)
//@route  Get /api/tasks/user-dashboard-data
//@access Private
const getUserDashboardData = async (req, res) => {try{

  }catch(error){
    res.status(500).json({message: "Server error", error: error.message});
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskChecklist,
  getDashboardData,
  getUserDashboardData,
};

