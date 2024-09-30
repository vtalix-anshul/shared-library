const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    coupons:[{
        couponId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Coupon",
            require:true
        },
        expiryDate:{
            type:Date,
            require:true,
        }
    }],
    favorite_doctors:[{
        doctorId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Doctor",
            require:true
        },
        rating:{
            type:Number,
        }
    }],
    total_amount_spent:{
        type:Number,
        default: 0
    },
    therapy_type:{
        type:String,
        enum:["individual", "couples", "teens"],
    }
},{
    timestamps:true
});


module.exports = mongoose.model("Patient",PatientSchema);