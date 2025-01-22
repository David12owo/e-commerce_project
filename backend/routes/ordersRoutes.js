import express from "express";
import { createCustomerOrder } from "../controllers/orderControllers/createCustomerOrder.js";
import { getAllOrders } from "../controllers/orderControllers/getOrders.js";
import { getOrderInfo } from "../controllers/orderControllers/getSingeOrderInfo.js";

const router = express.Router();

router.post("/create-order", createCustomerOrder);
router.get("/all-orders", getAllOrders);
router.get("/order-info/:orderId", getOrderInfo);

export default router;
