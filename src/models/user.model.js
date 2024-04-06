import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowecase: true,
        trim: true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowecase: true,
        trim: true
    },
    fullName:{
        type:String,
        required:true,
        trim: true,
        index:true
    },
    avatar:{
        type:String,  //cloudinary url
        required:true,
        
    },
    coverimage:{
        type:String,
    },
    watchHistory:[{
        type: Schema.Types.ObjectId,
        re:"Video"
    }],
    password:{
        type:String,
        required:[true, 'Password is required1']
    },
    refreshToken:{
        type:String,
    }


},{ 
    timestamps:true
})


export const User = mongoose.model("User", userSchema)