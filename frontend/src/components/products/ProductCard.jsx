import React from "react";
import { Button } from "antd";
import { Link } from "react-router";
import { formatCurrency } from "../../utils/helper";
import { useSelector } from "react-redux";

const ProductCard = ({
  product_image,
  product_id,
  product_price,
  product_name,
}) => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="border p-1 rounded-md hover:shadow-2xl transition-all duration-500 ">
      <img src={product_image} alt={product_name} />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{product_name}</h3>
        <p className=" font-bold mb-2">{formatCurrency(product_price)}</p>

        <Link to={`/products/${product_id}`}>
          <Button
            disabled={user !== null && user.userType === "admin" ? true : false}
            block
            type="primary"
          >
            View Item
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
