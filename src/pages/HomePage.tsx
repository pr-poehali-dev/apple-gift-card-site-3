import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Gift, HelpCircle, ShoppingCart } from "lucide-react";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <Card className="border-0 shadow-sm transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Apple Gift Card
            </h1>
            <p className="max-w-[700px] text-xl text-muted-foreground">
              Идеальный подарок для тех, кто ценит технологии и инновации. Доступны номиналы 1000 ₽, 2500 ₽ и 5000 ₽.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/cards">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Купить сейчас
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/instructions">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Как использовать
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Preview */}
      <section className="container px-4 mx-auto">
        <div className="relative">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl">
              {[1000, 2500, 5000].map((amount, i) => (
                <div
                  key={amount}
                  className="relative rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
                  style={{
                    transform: `rotate(${(i - 1) * 5}deg)`,
                    zIndex: i === 1 ? 20 : 10,
                  }}
                >
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary/90 to-primary/50 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <svg
                        viewBox="0 0 17 21"
                        width="17"
                        height="21"
                        className="w-8 h-8 text-white"
                      >
                        <path
                          d="M8.7 0.5C6.5 0.6 4.1 2 2.7 4.2 1.5 6.1 1.5 8.8 2.6 10.7 3.7 12.5 5.3 13.4 7.1 13.3 8 13.3 8.5 12.9 9.3 12.9 10.1 12.9 10.5 13.3 11.5 13.3 13.2 13.3 14.7 12.1 15.8 10.2 15.8 10.1 15.9 10.1 15.9 10 14.1 9.2 13.3 7.4 13.3 5.8 13.3 3.5 15.1 2.2 15.2 2.2 15.2 2.1 15.2 2.1 15.1 2 13.7 0.9 12.2 0.5 10.9 0.5 10 0.5 9.3 0.7 8.7 0.7 8.1 0.7 7.4 0.5 6.5 0.5 6 0.5 4.8 0.4 3.8 1 3.2 1.3 2.8 1.7 2.5 2.2 3.3 2.1 4.5 2.7 5.4 3.6 5.9 4.3 6.2 5 6.2 5.8 6.2 6.9 5.9 7.9 5.2 8.5 5.2 8.7 5.2 8.7 0.5 8.7ZM11.1 0C11.1 0 11.1 0 11.1 0 11.1 0.1 11 0.2 11 0.3 10.8 0.5 10.6 0.8 10.5 1.1 10.1 2 9.9 3.2 10.2 4.2 10.2 4.3 10.2 4.3 10.3 4.3 10.4 4.3 10.5 4.2 10.6 4 11.3 2.5 12.1 1 12.6 0.4 12.6 0.3 12.7 0.2 12.7 0.1 12.7 0.1 12.7 0 12.6 0 12.1 0 11.6 0 11.1 0Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-white text-xl font-medium">Gift Card</span>
                    </div>
                    <div>
                      <div className="text-white text-4xl font-bold mb-1">
                        {amount} ₽
                      </div>
                      <div className="text-white/80 text-sm">
                        Подарочная карта
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/cards">
                Выбрать карту
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container px-4 mx-auto">
        <div className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Преимущества Apple Gift Card
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Откройте мир цифровых возможностей с подарочными картами Apple
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Gift className="w-6 h-6" />}
              title="Универсальность"
              description="Используйте для покупки приложений, игр, музыки, фильмов, и подписок Apple."
            />
            <FeatureCard
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /></svg>}
              title="Мгновенная активация"
              description="Мгновенное получение кода и возможность сразу начать использовать карту."
            />
            <FeatureCard
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>}
              title="Без срока действия"
              description="Подарочные карты Apple не имеют срока действия и всегда остаются актуальными."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 mx-auto">
        <Card className="overflow-hidden border-0">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Готовы сделать подарок?
                </h2>
                <p className="text-muted-foreground">
                  Выберите подходящий номинал и подарите своим близким доступ к миру Apple.
                </p>
                <Button asChild className="rounded-full">
                  <Link to="/cards">
                    Перейти к картам
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video md:aspect-auto">
              <img
                src="/placeholder.svg"
                alt="Apple Gift Cards"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
