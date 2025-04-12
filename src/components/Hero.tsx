import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-apple-gray dark:bg-black text-center py-20 md:py-32">
      <div className="apple-container">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
          Apple Gift Card
        </h1>
        <p className="text-xl md:text-2xl text-apple-secondary dark:text-white/80 mb-8 max-w-2xl mx-auto">
          Один подарок. Множество возможностей.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/cards">
            <Button className="apple-button text-base px-6 py-3">
              Купить сейчас
            </Button>
          </Link>
          <Link to="/instructions">
            <Button variant="outline" className="text-base px-6 py-3">
              Узнать больше
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;