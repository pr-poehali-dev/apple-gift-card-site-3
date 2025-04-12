import InstructionStep from "@/components/InstructionStep";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const INSTRUCTION_STEPS = [
  {
    step: 1,
    title: "Выберите номинал карты",
    description: "Определитесь с суммой, которую хотите положить на Apple Gift Card: 1000, 2500 или 5000 рублей."
  },
  {
    step: 2,
    title: "Оплатите покупку",
    description: "Используйте любой удобный для вас способ оплаты: банковскую карту или электронный кошелек."
  },
  {
    step: 3,
    title: "Получите код активации",
    description: "После успешной оплаты код активации будет отправлен на указанную вами электронную почту."
  },
  {
    step: 4,
    title: "Активируйте карту",
    description: "Войдите в свой Apple ID, перейдите в App Store и введите полученный код активации в разделе 'Использовать подарочную карту или код'."
  },
  {
    step: 5,
    title: "Используйте баланс",
    description: "Теперь вы можете использовать баланс для покупки приложений, игр, музыки, фильмов и подписок на сервисы Apple."
  }
];

const InstructionsPage = () => {
  return (
    <div>
      <section className="apple-section bg-apple-gray dark:bg-black">
        <div className="apple-container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6">
            Как использовать Apple Gift Card
          </h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Подробная инструкция по приобретению и активации подарочной карты Apple.
          </p>
          
          <div className="bg-white dark:bg-apple-secondary rounded-2xl p-8 md:p-12 shadow-sm">
            {INSTRUCTION_STEPS.map((item) => (
              <InstructionStep
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="apple-section bg-white dark:bg-black text-center">
        <div className="apple-container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Готовы приобрести Apple Gift Card?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Выберите подходящий номинал и получите доступ к миллионам приложений, игр, 
            музыки, фильмов и сериалов.
          </p>
          <Link to="/cards">
            <Button className="apple-button text-base px-8 py-3">
              Выбрать карту
            </Button>
          </Link>
        </div>
      </section>
      
      <section className="apple-section bg-apple-gray dark:bg-black">
        <div className="apple-container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Часто задаваемые вопросы
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-apple-secondary rounded-2xl p-6">
              <h3 className="text-lg font-medium mb-2">Есть ли срок действия у Apple Gift Card?</h3>
              <p className="text-muted-foreground">
                Нет, баланс Apple Gift Card не имеет срока действия и будет доступен до тех пор, 
                пока вы не используете его полностью.
              </p>
            </div>
            
            <div className="bg-white dark:bg-apple-secondary rounded-2xl p-6">
              <h3 className="text-lg font-medium mb-2">Можно ли использовать карту частями?</h3>
              <p className="text-muted-foreground">
                Да, сумма будет добавлена на ваш Apple ID баланс, и вы сможете использовать её 
                для любых покупок в экосистеме Apple.
              </p>
            </div>
            
            <div className="bg-white dark:bg-apple-secondary rounded-2xl p-6">
              <h3 className="text-lg font-medium mb-2">Что делать, если я не получил код активации?</h3>
              <p className="text-muted-foreground">
                Проверьте папку "Спам" в вашей электронной почте. Если код не пришел в течение 
                15 минут после оплаты, обратитесь в нашу службу поддержки.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructionsPage;