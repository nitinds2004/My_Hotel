import express from "express"
import { addfood,listfood,removefood} from "../controllers/foodcontroler.js"
import multer from "multer"

const foodrouter =express.Router();

const storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cd)=>{
        return cd(null,`${Date.now()}${file.originalname}`)
    }
})

const uploads =multer({storage:storage}) 

foodrouter.post("/add",uploads.single("image"),addfood) 
foodrouter.get("/list",listfood)
foodrouter.post("/remove",removefood);




export default foodrouter;