import { NavLink, useNavigate } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../features/user/userSlice.js";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleUserLogout() {
    dispatch(updateUser(null));
    navigate("/");
  }

  return (
    <nav className="shadow-md sticky top-0 z-[10] bg-black text-orange-600">
      <section className="container mx-auto flex justify-between items-center p-4">
        <NavLink to={"/"}>
          <h1 className="hover:text-white font-bold tracking-wide text-2xl">
            Dave-TVs
          </h1>
        </NavLink>

        <div className="flex items-center gap-4 text-gray-500 font-medium">
          <NavLink
            className={
              "hover:text-white transition-colors duration-500 text-lg"
            }
            to={"/products"}
          >
            MarketPlace
          </NavLink>

          {user === null ? (
            <NavLink
              className={
                "hover:text-white transition-colors duration-500 text-lg"
              }
              to={"/login"}
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={handleUserLogout}
              className="hover:text-white transition-colors duration-500 text-lg"
            >
              Logout
            </button>
          )}

          {user !== null && (
            <div className="bg-orange-700 p-1 rounded-md text-white font-medium">
              <p className="text-2xl">{user.name.slice(0, 5)}</p>
            </div>
          )}

          {user !== null && user.userType === "admin" ? (
            <NavLink to={"/admin"}>Admin</NavLink>
          ) : (
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
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
