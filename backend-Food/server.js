import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodrouter from "./routes/foodrout.js";
import userRouter from "./routes/userrout.js";
import 'dotenv/config'
import cartRouter from "./routes/cartrout.js";
import orderRouter from "./routes/orderrout.js";


//app config
const app=express();
const port=4000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoint
app.use("/api/food", foodrouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API Working") 


})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
    
})

// mongodb+srv://nitinds2004:Nitin2004@cluster0.f6zfb.mongodb.net/?