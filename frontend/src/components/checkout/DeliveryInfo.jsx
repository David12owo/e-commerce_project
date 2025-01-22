import { Input } from "antd";
import React from "react";

const DeliveryInfo = ({
  customerName,
  email,
  phoneNumber,
  deliveryAddress,
  handleInput,
}) => {
  return (
    <section>
      <h3 className="text-blue-700 text-4xl mb-4">Complete Your Order</h3>
      <p className="text-2xl text-gray-700 font-light">
        Enter your delivery information to make payment and confirm your order.
      </p>
      <form className="flex flex-col gap-6 my-8 bg-blue-300 p-2 md:p-10">
        <Input
          name="customerName"
          value={customerName}
          onChange={handleInput}
          placeholder="Your name"
          size="large"
        />
        <Input
          name="email"
          value={email}
          onChange={handleInput}
          placeholder="Email address"
          size="large"
        />
        <Input
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInput}
          placeholder="Phone number"
          size="large"
        />
        <Input
          name="deliveryAddress"
          value={deliveryAddress}
          onChange={handleInput}
          placeholder="Delivery address"
          size="large"
        />
      </form>
    </section>
  );
};

export default DeliveryInfo;
