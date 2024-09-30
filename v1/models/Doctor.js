const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    main_specialization:{
        type:String,
        require:true
    },
    experience:{
        type:Number,
        require:true
    },
    education:[{
        degree:{
            type:String,
            require:true
        },
        university:{
            type:String,
            require:true
        },
        year:{
            type:Number,
            require:true
        },
        file_url:{
            type:String,
            require:true
        }
    }],
    clinic_address_complete:{
        type:String,
    },
    clinic_phone:{
        type:String,
        require:true
    },
    registration_number:{
        type:String,
        require:true
    },
    registration_council:{
        type:String,
        require:true
    },
    registration_year:{
        type:Number,
        require:true
    },
    identity_proof:{
        file_type:{
            type:String,
            require:true
        },
        file_url:{
            type:String,
            require:true
        },
    },
    isApproved:{
        type:Boolean,
        default:false,
    },
    profile_questions:[{
        question_number:{
            type:Number,
        },
        answer:{
            type:String,
        },
    }],
    total_patients_handled:{
        type:Number,
        default:0
    },
    total_earnings:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        default:0
    },
    discount_on_3_appointments:{
        type: Number,
        default: 3
    },
    discount_on_5_appointments:{
        type: Number,
        default: 3
    },
    total_appointments:{
        type:Number,
        default:0
    },
    total_rescheduled_appointments:{
        type:Number,
        default:0
    },
    total_appointments_cancelled:{
        type:Number,
        default:0
    },
    total_appointments_completed:{
        type:Number,
        default:0
    },
    total_rescheduled_fee:{
        type:Number,
        default: 0,
    },
    total_refund_sum:{
        type:Number,
        default:0
    },
    rating:{
        type:Number,
        default:0
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],

},{
    timestamps:true
});

module.exports = mongoose.model("Doctor",  DoctorSchema);
