import {
  Home,
  ListOrdered,
  LogIn,
  MenuIcon,
  Percent,
  ShoppingCart,
} from 'lucide-react'
import { Button } from './button'
import { Card } from './card'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './sheet'

export function Header() {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LogIn className="h-4 w-4" />
              Fazer Login
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <Home className="h-4 w-4" />
              Inicio
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <Percent className="h-4 w-4" />
              Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrdered className="h-4 w-4" />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button variant="outline" size="icon">
        <ShoppingCart />
      </Button>
    </Card>
  )
}
