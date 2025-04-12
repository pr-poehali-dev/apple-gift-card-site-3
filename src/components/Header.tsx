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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link to="/" className="flex items-center gap-2">
            <svg
              viewBox="0 0 17 21"
              width="17"
              height="21"
              className="w-5 h-5"
            >
              <path
                d="M8.7 0.5C6.5 0.6 4.1 2 2.7 4.2 1.5 6.1 1.5 8.8 2.6 10.7 3.7 12.5 5.3 13.4 7.1 13.3 8 13.3 8.5 12.9 9.3 12.9 10.1 12.9 10.5 13.3 11.5 13.3 13.2 13.3 14.7 12.1 15.8 10.2 15.8 10.1 15.9 10.1 15.9 10 14.1 9.2 13.3 7.4 13.3 5.8 13.3 3.5 15.1 2.2 15.2 2.2 15.2 2.1 15.2 2.1 15.1 2 13.7 0.9 12.2 0.5 10.9 0.5 10 0.5 9.3 0.7 8.7 0.7 8.1 0.7 7.4 0.5 6.5 0.5 6 0.5 4.8 0.4 3.8 1 3.2 1.3 2.8 1.7 2.5 2.2 3.3 2.1 4.5 2.7 5.4 3.6 5.9 4.3 6.2 5 6.2 5.8 6.2 6.9 5.9 7.9 5.2 8.5 5.2 8.7 5.2 8.7 0.5 8.7Z"
                fill="currentColor"
              />
              <path
                d="M11.1 0C11.1 0.1 11 0.2 11 0.3 10.8 0.5 10.6 0.8 10.5 1.1 10.1 2 9.9 3.2 10.2 4.2 10.2 4.3 10.2 4.3 10.3 4.3 10.4 4.3 10.5 4.2 10.6 4 11.3 2.5 12.1 1 12.6 0.4 12.6 0.3 12.7 0.2 12.7 0.1 12.7 0.1 12.7 0 12.6 0 12.1 0 11.6 0 11.1 0Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-semibold">Apple Gift Cards</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/cards"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink("/cards") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Карты
            </Link>
            <Link
              to="/instructions"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveLink("/instructions") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Инструкция
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <ShoppingCart className="w-5 h-5" />
            <span className="sr-only">Корзина</span>
          </Button>
          <Button asChild className="hidden sm:flex rounded-full">
            <Link to="/cards">Купить сейчас</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
