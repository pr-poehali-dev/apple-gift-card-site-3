import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">Страница не найдена</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-md">
        Извините, страница, которую вы ищете, не существует или была перемещена.
      </p>
      <Link to="/">
        <Button className="apple-button">Вернуться на главную</Button>
      </Link>
    </div>
  );
};

export default NotFound;