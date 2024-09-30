// will check if the doctor is approved or not.
const Doctor = require("../models/Doctor");
const asyncHandler = require("express-async-handler");
const isDoctorApproved = asyncHandler(async (req, res, next)=>{
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
        res.status(401);
        throw new Error("Please wait for approval before accessing");
    }
    next();
});

module.exports = isDoctorApproved;