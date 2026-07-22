const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({

    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },

    email:{
        type:String,
        unique:true,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    phone:String,

    country:String,

    role:{
        type:String,
        enum:["admin","client","artisan"],
        default:"client"
    },

    avatar:String,

    verified:{
        type:Boolean,
        default:false
    },

    active:{
        type:Boolean,
        default:true
    }

},
{
timestamps:true
});

module.exports=mongoose.model("User",userSchema);
