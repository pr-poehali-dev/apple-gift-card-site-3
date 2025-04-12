import Hero from "@/components/Hero";
import GiftCardFeatures from "@/components/GiftCardFeatures";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      <GiftCardFeatures />
      
      <section className="apple-section bg-apple-gray dark:bg-black">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Выберите номинал
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1000, 2500, 5000].map((amount, index) => (
              <Link to="/cards" key={index}>
                <Card className="apple-card hover:shadow-xl transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="text-primary text-3xl font-semibold mb-4">
                      {amount} ₽
                    </div>
                    <p className="text-muted-foreground">
                      Apple Gift Card
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="apple-section bg-white dark:bg-black py-24 text-center">
        <div className="apple-container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Универсальный подарок для всех устройств Apple
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Открывает доступ к миллионам приложений, игр, музыке, фильмам, сериалам, 
            iCloud, и многому другому.
          </p>
          <Link to="/instructions" className="apple-button text-base px-6 py-3">
            Узнать больше
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;