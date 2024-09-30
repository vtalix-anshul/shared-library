const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    start_time:{
        type:String,
        required:true
    },
    end_time:{
        type:String,
        required:true
    },
    appointment_type:{
        type:String,
        enum:["individual", "teen", "couple"],
    },
    appointment_status:{
        type:String,
        enum:["scheduled", "rescheduled", "completed", "cancelled"],
        default:"scheduled"
    },
    cancelled_by:{
        type:String,
        enum:["doctor", "patient"],
        default:""
    },
    appointment_description:{
        type:String,
    },
    payment:{
        type:Number,
        required:true
    },
    appointment_medium:{
        type:String,
        enum:["video", "audio", "chat"],
        default: "video"
    },
    rating:{
        type:Number,
    },
    feedback_description:{
        type:String
    },
    is_active:{
        type:Boolean,
        default:true
    },
    summary:{
        type:String,
        // this field need to be filled mandatorily by the doctor after the appointment
    },
    chat_history:{
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }],
    },
    record:{
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Record' }],
    },
},{
    timestamps:true
});


AppointmentSchema.index({ patient: 1 });          // Index for patient lookup
AppointmentSchema.index({ doctor: 1 });           // Index for doctor lookup
AppointmentSchema.index({ date: 1 });             // Index for querying by date
AppointmentSchema.index({ start_time: 1 });       // Index for sorting or filtering by start time
AppointmentSchema.index({ end_time: 1 });         // Index for sorting or filtering by end time
AppointmentSchema.index({ appointment_status: 1 }); // Index for filtering by appointment status
AppointmentSchema.index({ is_active: 1 }); 

module.exports = mongoose.model("Appointment", AppointmentSchema);