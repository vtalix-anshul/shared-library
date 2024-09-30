const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    middle_name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    phone:{
        type:String,
    },
    gender:{
        type:String,
    },
    address:{
        // address will store the object of it which will include the city,  state, country, zip
        type: Object,
        // we will define the object  inside the address object here
        city:{
            type:String,
        },
        state:{
            type:String,
        },
        country:{
            type:String,
        },
        zip:{
            type:String,
        },
    },
    date_of_birth:{
        type:Date,
    },
    age:{
        type:Number,
    },
    about:{
        type:String,
    },
    role:{
        type:String,
        enum:["patient", "doctor", "consultant", "admin"]
    },
    profile_picture_url:{
        type:String,
        default: null,  // default value is null,will be changed later
    },
    account_status:{
        type:String,
        enum:["active", "banned"]
    },
    languages:{
        type: [String],
    },
    search_history:{
        type:[String],
    },
    google_id:{
        type:String,
    },
    // we will add the fields here which will be used to store the user's location
    location:{
        type: Object,
        // we will define the object  inside the location object here
        latitude:{
            type: Number,
        },
        longitude:{
            type:Number,
        },
    },
    passwordResetToken:{
        type:String,
    },
    passwordTokenExpires:{
        type:Date,
    },
    is2FactorEnabled:{
        type:Boolean,
        default: false
    },
    last_login:{
        type:Date,
    }
},{
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);