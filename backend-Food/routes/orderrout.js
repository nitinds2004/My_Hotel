import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder } from "../controllers/ordercontroler.js"

const orderRouter =express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);

export default orderRouter;
