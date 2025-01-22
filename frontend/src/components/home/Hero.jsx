import { Link } from "react-router";
import CTAButton from "../ui/buttons/CTAButton";

const Hero = () => {
  return (
    <section className="container mx-auto bg-blue-400 flex flex-col lg:flex-row items-center justify-center py-24 lg:py-16 gap-8 p-4">
      <div className="max-w-[500px]">
        <h1 className="text-3xl lg:6xl text-slate-800 font-semibold mb-6">
          Vison Quest"Your Guide to What's On,When to Watch'
        </h1>
        <p className="text-lg font-light text-gray-800 mb-6">
          Experience the ultimate home entertainment with our wide selection of
          TVs. From budget-friendly options to high-end 4K, 8K, and OLED models,
          we have the perfect TV for every need and budget. Enjoy fast and
          reliable shipping, easy returns, and expert customer support.
        </p>

        <Link to={"/products"}>
          <CTAButton buttonText="Start Shopping" />
        </Link>
      </div>

      <div>
        <img className="w-[800px]" src="/hero1.png" alt="Dave-TVs hero" />
      </div>
    </section>
  );
};

export default Hero;
