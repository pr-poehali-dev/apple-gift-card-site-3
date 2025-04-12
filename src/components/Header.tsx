import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black text-white backdrop-blur">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link to="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 170 170"
              className="w-5 h-5"
            >
              <path
                d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.2-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.71 3.35-4.92.21-9.82-1.96-14.7-6.52-3.11-2.73-7-7.4-11.67-14.03-4.99-7.08-9.1-15.29-12.3-24.65-3.45-10.11-5.19-19.9-5.19-29.38 0-10.86 2.35-20.22 7.05-28.07 3.69-6.29 8.61-11.24 14.76-14.89s12.76-5.52 19.91-5.63c3.91 0 9.03 1.21 15.41 3.59 6.36 2.38 10.44 3.6 12.23 3.6 1.34 0 5.87-1.42 13.57-4.24 7.28-2.62 13.44-3.7 18.5-3.27 13.65 1.1 23.9 6.48 30.72 16.16-12.2 7.4-18.23 17.74-18.1 31 .11 10.34 3.86 18.93 11.23 25.77 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.1-2.96 15.67-8.86 22.67-7.12 8.32-15.73 13.13-25.07 12.38-.12-.97-.19-1.99-.19-3.07 0-7.78 3.39-16.1 9.4-22.91 3-3.45 6.82-6.31 11.45-8.6 4.62-2.25 8.99-3.5 13.1-3.71.12 1.08.18 2.17.18 3.24z"
                fill="currentColor"
              />
            </svg>
            <span className="font-semibold">Apple Gift Cards</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink("/") ? "text-primary" : "text-gray-300"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/cards"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink("/cards") ? "text-primary" : "text-gray-300"
              }`}
            >
              Карты
            </Link>
            <Link
              to="/instructions"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink("/instructions") ? "text-primary" : "text-gray-300"
              }`}
            >
              Инструкция
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full text-white border-gray-700 bg-transparent hover:bg-gray-800">
            <ShoppingCart className="w-5 h-5" />
            <span className="sr-only">Корзина</span>
          </Button>
          <Button asChild className="hidden sm:flex rounded-full bg-white text-black hover:bg-gray-200">
            <Link to="/cards">Купить сейчас</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;