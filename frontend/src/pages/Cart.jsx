import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import BackButton from "../components/ui/buttons/BackButton";

const Cart = () => {
  return (
    <section className="max-w-[1000px] mx-auto py-16 lg:py-24 px-4">
      <h1 className=" text-blue-600 text-3xl lg:text-5xl mb-4">
        Shopped items
      </h1>
      <div className="flex justify-start">
        <BackButton />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full lg:w-[60%]">
          <CartList />
        </div>
        <div className="w-full lg:w-[40%]">
          <CartSummary />
        </div>
      </div>
    </section>
  );
};

export default Cart;
