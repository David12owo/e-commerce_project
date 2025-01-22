import AllProduct from "../components/products/AllProduct";

const MarketPlace = () => {
  return (
    <section className="container mx-auto p-4 py-24 lg:py-16">
      <h1 className="text-2xl font-semibold mb-8 text-slate-800">
        Shop Exclusive TVs
      </h1>
      <AllProduct />
    </section>
  );
};

export default MarketPlace;
