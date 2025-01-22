import Order from "../../models/orderModel/orderModel.js";

async function createCustomerOrder(req, res) {
  const { reference, customerDeliveryInfo, userCartSummary, cartItems } =
    req.body;

  if (!reference) {
    return res.status(400).json({ message: "Transaction reference missing" });
  }

  if (!customerDeliveryInfo) {
    return res
      .status(400)
      .json({ message: "Customer Delivery info incomplete" });
  }

  if (!userCartSummary) {
    return res.status(400).json({ message: "Order summary not provided" });
  }

  if (!cartItems) {
    return res.status(400).json({ message: "Order cart items missing" });
  }

  try {
    const orderCreated = await Order.create({
      reference: {
        transaction: reference.transaction,
        message: reference.message,
        status: reference.status,
        trxref: reference.trxref,
      },
      customerDeliveryInfo: customerDeliveryInfo,
      userCartSummary: userCartSummary,
      cartItems: cartItems,
    });

    res
      .status(201)
      .json({ status: "Success", data: "Order created successfully" });
  } catch (error) {
    res.status(400).json({ status: "Failed", data: error });
  }
}

export { createCustomerOrder };
