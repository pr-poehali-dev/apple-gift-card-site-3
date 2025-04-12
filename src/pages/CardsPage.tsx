import GiftCard from "@/components/GiftCard";

const GIFT_CARDS = [
  {
    amount: 1000,
    imageSrc: "/placeholder.svg"
  },
  {
    amount: 2500,
    imageSrc: "/placeholder.svg"
  },
  {
    amount: 5000,
    imageSrc: "/placeholder.svg"
  }
];

const CardsPage = () => {
  return (
    <div>
      <section className="apple-section bg-apple-gray dark:bg-black">
        <div className="apple-container">
          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6">
            Apple Gift Cards
          </h1>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Выберите подходящий номинал карты и оплатите покупку. После оплаты вы 
            получите код активации на вашу электронную почту.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GIFT_CARDS.map((card, index) => (
              <GiftCard 
                key={index}
                amount={card.amount}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="apple-section bg-white dark:bg-black">
        <div className="apple-container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Преимущества Apple Gift Card
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-apple-gray dark:bg-apple-secondary rounded-2xl p-8">
              <h3 className="text-xl font-medium mb-4">Мгновенная доставка</h3>
              <p className="text-muted-foreground">
                Получите код активации на вашу электронную почту сразу после оплаты.
              </p>
            </div>
            
            <div className="bg-apple-gray dark:bg-apple-secondary rounded-2xl p-8">
              <h3 className="text-xl font-medium mb-4">Универсальность</h3>
              <p className="text-muted-foreground">
                Используйте для покупки приложений, игр, музыки, фильмов и многого другого.
              </p>
            </div>
            
            <div className="bg-apple-gray dark:bg-apple-secondary rounded-2xl p-8">
              <h3 className="text-xl font-medium mb-4">Без срока действия</h3>
              <p className="text-muted-foreground">
                Баланс подарочной карты не имеет срока действия.
              </p>
            </div>
            
            <div className="bg-apple-gray dark:bg-apple-secondary rounded-2xl p-8">
              <h3 className="text-xl font-medium mb-4">Идеальный подарок</h3>
              <p className="text-muted-foreground">
                Подарите близким возможность выбрать то, что они действительно хотят.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsPage;