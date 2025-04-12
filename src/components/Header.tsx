import { Link } from "react-router-dom";
import { AppleIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <Link to="/" className="text-white">
            <AppleIcon className="h-5 w-5" />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="apple-nav-item text-white">
              Главная
            </Link>
            <Link to="/cards" className="apple-nav-item text-white">
              Gift Cards
            </Link>
            <Link to="/instructions" className="apple-nav-item text-white">
              Инструкция
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/cards" className="apple-nav-item text-white">
              Купить
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;