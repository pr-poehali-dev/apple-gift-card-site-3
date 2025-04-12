import { Music, Video, Gamepad2, Gift } from "lucide-react";

const GiftCardFeatures = () => {
  return (
    <section className="apple-section bg-white dark:bg-black">
      <div className="apple-container">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Используйте Apple Gift Card для всего, что вам нравится
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <span className="text-5xl">🎵</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Музыка и развлечения</h3>
            <p className="text-muted-foreground">
              Подписки на Apple Music, Apple TV+, Apple News+ и многое другое.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <span className="text-5xl">🎮</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Игры и приложения</h3>
            <p className="text-muted-foreground">
              Игры Apple Arcade, приложения App Store и внутриигровые покупки.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <span className="text-5xl">🎁</span>
            </div>
            <h3 className="text-xl font-medium mb-3">Товары и аксессуары</h3>
            <p className="text-muted-foreground">
              Продукты, аксессуары и другие услуги в Apple Store.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCardFeatures;