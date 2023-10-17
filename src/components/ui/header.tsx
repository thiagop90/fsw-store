import { MenuIcon, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

export function Header() {
  return (
    <Card className="flex justify-between p-[1.875rem] items-center">
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>

      <h1 className="font-semibold text-lg"><span className="text-primary">FSW</span> Store</h1>

      <Button variant="outline" size="icon">
        <ShoppingCart />
      </Button>
    </Card>  
  )
}
