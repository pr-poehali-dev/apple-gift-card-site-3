import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-apple-gray dark:bg-black text-apple-secondary dark:text-white py-12">
      <div className="apple-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Покупки и информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cards" className="text-xs opacity-80 hover:opacity-100">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link to="/instructions" className="text-xs opacity-80 hover:opacity-100">
                  Инструкция
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Сервисы</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-xs opacity-80">
                  Apple Music
                </span>
              </li>
              <li>
                <span className="text-xs opacity-80">
                  Apple TV+
                </span>
              </li>
              <li>
                <span className="text-xs opacity-80">
                  Apple Arcade
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">О компании</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-xs opacity-80">
                  Apple и окружающая среда
                </span>
              </li>
              <li>
                <span className="text-xs opacity-80">
                  Конфиденциальность
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-apple-secondary border-opacity-10">
          <p className="text-xs opacity-70">
            © 2023 Apple Gift Cards. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;