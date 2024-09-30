require("dotenv").config();
const UserV1 = require("./v1/models/User");
const PatientV1 = require("./v1/models/Patient");
const DoctorV1 = require("./v1/models/Doctor");
const Appointment = require("./v1/models/Appointment");
const AppointmentSlots = require("./v1/models/DoctorAppointmentSlots");
const errorHandler = require("./v1/middlewares/errorHandler");
const isDoctorApproved = require("./v1/middlewares/isDoctorApproved");
const authMiddleware = require("./v1/middlewares/authMiddleware");


console.log("process is ", process.env.JWT_SECRET);

module.exports = {
    models:{
        User:{ v1: UserV1 }, // for version 2 we will use v2:UserV2
        Patient:{ v1: PatientV1 },
        Doctor:{ v1: DoctorV1 },
        Appointment:{ v1: Appointment},
        AppointmentSlots:{ v1: AppointmentSlots}
    },
    middlewares:{
        errorHandler:{ v1: errorHandler},
        isDoctorApproved:{ v1: isDoctorApproved },
        authMiddleware:{ v1: authMiddleware}
    }
};



// how to access the models from here.

// in js file

// const {models} = require("shared-library")
// const User = models.User.v1; // access the v1 model of User
