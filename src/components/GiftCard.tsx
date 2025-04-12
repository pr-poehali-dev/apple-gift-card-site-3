import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface GiftCardProps {
  amount: number;
  imageSrc: string;
}

const GiftCard = ({ amount, imageSrc }: GiftCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="apple-card transition-transform duration-300"
      style={{ transform: isHovered ? 'scale(1.03)' : 'scale(1)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <img 
          src={imageSrc || "/placeholder.svg"} 
          alt={`Apple Gift Card ${amount} ₽`}
          className="w-full object-cover h-48"
        />
        <div className="p-6">
          <h3 className="text-xl font-medium mb-2">Apple Gift Card</h3>
          <p className="text-2xl font-semibold text-primary">{amount} ₽</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="apple-button w-full">
          <ShoppingCart className="mr-2 h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GiftCard;