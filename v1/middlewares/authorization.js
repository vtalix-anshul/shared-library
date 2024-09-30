 
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Doctor = require(""); 

module.exports.isAdmin = expressAsyncHandler(async (req, res, next) => {
    if(!req.user){
        res.status(401);
        throw new Error("Please log in");
    }
 
    if(!req.user.role !== "admin"){
        res.status(401);
        throw new Error("You are not authorized");
    }
 
    next(); //if the user is admin then allow him to proceed
});
 
module.exports.isDoctorApproved = expressAsyncHandler(async (req, res, next) => {
    if(!req.user){
        res.status(401);
        throw new Error("Please log in");
    }
 
    if(req.user.role !== "doctor"){
        res.status(401);
        throw new Error("You are not authorized");
    }
 
    // get the doctor from the db and check if he is approved or not
    const doctor = await Doctor.findOne({ _id: req.user._id });
   
    if(!doctor.isApproved){
        res.status(403);
        throw new Error("Please wait for approval before accessing");
    }
    next();
});

module.exports.isDoctor = asyncHandler(async (req,res,next)=>{
    if(!req.user){
        res.status(401);
        throw new Error("Please log in");
    }   
    if(req.user.role !== "doctor"){
        res.status(401);
        throw new Error("You are not authorized");
    }
    next();
});
