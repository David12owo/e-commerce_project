import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { serverUrl } from "../../utils/helper";
import moment from "moment";

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
    <div className="max-w-[1000px] mx-auto p-4 py-16 bg-green-50 my-10 rounded-md">
      <p className="bg-green-800 text-white  w-fit ">
        {moment(new Date(orderInformation?.createdAt)).format(
          "MMMM Do YYYY, h:mm:ss a"
        )}
      </p>
      <h2>{orderInformation?.orderStatus}</h2>

      <div>
        <h2>Transaction details</h2>
        <p>
          <strong>PayStack TransactionId: </strong>{" "}
          {orderInformation.reference.trxref}
        </p>
        <p>
          <strong>Transaction status: </strong>{" "}
          {orderInformation.reference.status}
        </p>
        <p>
          <strong>Payment: </strong>
          {orderInformation.reference.message}
        </p>
      </div>

      <div>
        <h2>Customer information</h2>
        <p>
          <strong>Name: </strong>{" "}
          {orderInformation.customerDeliveryInfo.customerName}
        </p>
        <p>
          <strong>Email: </strong> {orderInformation.customerDeliveryInfo.email}
        </p>
        <p>
          <strong>PhoneNo: </strong>{" "}
          {orderInformation.customerDeliveryInfo.phoneNumber}
        </p>
        <p>
          <strong>Delivery Address: </strong>{" "}
          {orderInformation.customerDeliveryInfo.deliveryAddress}
        </p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
          </tr>
        </thead>

        <tbody>
          {orderInformation.cartItems.map((item) => (
            <tr key={item.product_id}>
              <td>{item.product_id}</td>
              <td>
                <div>
                  <img src={item.product_image} alt={item.product_name} />
                </div>
              </td>
              <td>{item.product_name}</td>
              <td>{item.product_price}</td>
              <td>{item.product_quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
