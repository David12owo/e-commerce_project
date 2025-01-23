import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { formatCurrency, serverUrl } from "../../utils/helper";
import moment from "moment";
import BackButton from "../../components/ui/buttons/BackButton";

const OrderDetails = () => {
  const params = useParams();
  const [orderInformation, setOrderInformation] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  async function getOrderDetails() {
    setLoading(true);
    try {
      const response = await axios.get(
        `${serverUrl}/order/order-info/${params.order_id}`
      );
      console.log(response);

      setOrderInformation(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOrderDetails();
  }, []);

  if (loading === true) {
    return (
      <div>
        <h1 className="text-center py-60 animate-pulse text-gray-500 text-5xl tracking-wider">
          Loading order details...
        </h1>
      </div>
    );
  }

  console.log(orderInformation);

  return (
    <div className="max-w-[1000px] mx-auto p-4 py-16 bg-blue-50 my-10 rounded-md">
      <BackButton />
      <p className="text-black text-3xl font-medium my-3 w-fit rounded-md p-2 ">
        {moment(new Date(orderInformation?.createdAt)).format(
          "MMMM Do YYYY, h:mm:ss a"
        )}
      </p>
      <h3 className="bg-blue-500 text-white w-fit p-2 rounded-md">
        {orderInformation?.orderStatus}
      </h3>

      <div className="border-2 p-3 rounded-md my-4 bg-blue-500">
        <h2 className="text-2xl font-semibold text-white">
          Transaction details
        </h2>
        <p className="text-gray-300">
          <strong>PayStack TransactionId: </strong>{" "}
          {orderInformation.reference.trxref}
        </p>
        <p className="text-gray-300">
          <strong>Transaction status: </strong>{" "}
          {orderInformation.reference.status}
        </p>
        <p className="text-gray-300">
          <strong>Payment: </strong>
          {orderInformation.reference.message}
        </p>
      </div>

      <div className="border-2 p-3 rounded-md my-4 bg-blue-500">
        <h2 className="text-2xl font-semibold text-white">
          Customer information
        </h2>
        <p className="text-gray-300">
          <strong>Name: </strong>{" "}
          {orderInformation.customerDeliveryInfo.customerName}
        </p>
        <p className="text-gray-300">
          <strong>Email: </strong> {orderInformation.customerDeliveryInfo.email}
        </p>
        <p className="text-gray-300">
          <strong>PhoneNo: </strong>{" "}
          {orderInformation.customerDeliveryInfo.phoneNumber}
        </p>
        <p className="text-gray-300">
          <strong>Delivery Address: </strong>{" "}
          {orderInformation.customerDeliveryInfo.deliveryAddress}
        </p>
      </div>

      <table className="bg-white p-2 border-2 rounded-md w-full">
        <thead>
          <tr className="text-blue-800 text-left border-b">
            <th className="py-2">Product Id</th>
            <th>Product image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
          </tr>
        </thead>

        <tbody>
          {orderInformation.cartItems.map((item) => (
            <tr className="border-b" key={item._id}>
              <td className="py-6">{item.product_id}</td>
              <td>
                <div>
                  <img
                    className="w-16 rounded-lg"
                    src={item.product_image}
                    alt={item.product_name}
                  />
                </div>
              </td>
              <td>{item.product_name}</td>
              <td>{formatCurrency(item.product_price)}</td>
              <td>{item.product_quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
