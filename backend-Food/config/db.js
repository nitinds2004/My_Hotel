import mongoose from "mongoose";


 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://nitinds2004:Nitin2004@cluster0.f6zfb.mongodb.net/food-del').then(()=>
        console.log("DB connected")
        
    )

}