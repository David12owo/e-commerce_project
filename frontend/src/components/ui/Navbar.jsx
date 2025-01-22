import { NavLink } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav className="shadow-md sticky top-0 z-[10] bg-black text-orange-600">
      <section className="container mx-auto flex justify-between items-center p-4">
        <NavLink to={"/"}>
          <h1 className="hover:text-white font-bold tracking-wide text-2xl">
            Dave-TVs
          </h1>
        </NavLink>

        <div className="flex gap-4 text-gray-500 font-medium">
          <NavLink
            className={
              "hover:text-white transition-colors duration-500 text-lg"
            }
            to={"/products"}
          >
            MarketPlace
          </NavLink>
          <NavLink
            className={
              "hover:text-white relative transition-colors duration-500"
            }
            to={"/cart"}
          >
            <ShoppingCart strokeWidth={2.5} />
            <p className="bg-red-500 absolute -top-4 right-0 text-white rounded-lg text-center px-1 text-xs">
              {cartItems.length}
            </p>
          </NavLink>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
