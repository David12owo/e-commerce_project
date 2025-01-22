import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productData } from "../../constant/products";
import { Button, message } from "antd";
import { formatCurrency } from "../../utils/helper";
import { addItemToCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../ui/buttons/BackButton";

const ProductInfo = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const product = productData.find(
      (item) => item.product_id === params.product_id
    );
    setSingleProduct(product);
  }, []);

  if (singleProduct === null) {
    return (
      <div>
        <h1 className="text-4xl text-gray-500 animate-pulse p-4">
          Loading product info...
        </h1>
      </div>
    );
  }

  function handleAddItemToCart() {
    // check if single product already in cart
    const productInCart = cartItems.find(
      (item) => item.product_id === singleProduct.product_id
    );

    if (productInCart === undefined) {
      dispatch(addItemToCart(singleProduct));
      messageApi.success("Product added to cart");
    } else {
      messageApi.error("Item already in cart.");
    }
  }

  return (
    <section>
      {contextHolder}
      <BackButton />

      <div className="flex flex-col gap-6 border p-4 bg-gray-50 rounded-md max-w-[600px]">
        <img
          className="w-[500px] mx-auto"
          src={singleProduct.product_image}
          alt={singleProduct.product_name}
        />
        <h1 className="text-4xl font-bold">{singleProduct.product_name}</h1>
        <p className="text-2xl font-medium">
          {formatCurrency(singleProduct.product_price)}
        </p>

        <p className="text-lg text-gray-500">
          {singleProduct.product_description}
        </p>

        <Button onClick={handleAddItemToCart} type="primary" size="large" block>
          Add to cart
        </Button>
      </div>
    </section>
  );
};

export default ProductInfo;
