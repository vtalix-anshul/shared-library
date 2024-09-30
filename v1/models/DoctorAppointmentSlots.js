const mongoose = require("mongoose");

const DoctorAppointmentSlots = new mongoose.Schema({
    doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        require:[true,  "Doctor ID is required"],

    },
    date: {
        type: Date,
        default:  Date.now,
        required: [true,  "Date is required"],

    },
    slots:{
        // the slots will have an array of object which will store the time of slot,  and the status of the slots
        type:[{
            _id:{
                type: mongoose.Schema.Types.ObjectId,
                default: () => new mongoose.Types.ObjectId()
            },
            startTime: {
                //since we are storing the number here. We will  convert it to time in the controller
                type:Number,
                required:[true, "Please enter the start time of the slot"],
            },
            endTime:{
                type: Number,
                required:[true,  "End time is required"],
            },
            appointmentId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Appointment"
            },
            patient_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Patient"
            }
        }]

    }
},{
    timestamps:true
});

// indexing the doctor and date for faster query results
DoctorAppointmentSlots.index({doctor_id:1,date:1},{unique:true});

module.exports = mongoose.model("AppointmentSlots", DoctorAppointmentSlots);