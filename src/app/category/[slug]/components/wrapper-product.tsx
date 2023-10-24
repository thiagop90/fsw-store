'use client'

import { CardProduct } from '@/components/card-product'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { computeProductTotalPrice } from '@/helpers/products'
import { Category, Product } from '@prisma/client'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

type WrapperProductProps = {
  category: Category
  products: Product[]
}

export function WrapperProduct({ products, category }: WrapperProductProps) {
  const [filteredProducts, setFilteredProducts] = useState(products)

  const filterAscending = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      return Number(a.basePrice) - Number(b.basePrice)
    })
    setFilteredProducts(sortedProducts)
  }

  const filterDescending = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      return Number(b.basePrice) - Number(a.basePrice)
    })
    setFilteredProducts(sortedProducts)
  }

  return (
    <div className="pb-6">
      <div className="flex items-center justify-between p-6 sm:px-0">
        <div>
          <h1 className="text-2xl font-bold">{category.name}</h1>
          <span className="text-muted-foreground">
            {products.length} products
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none">
            Sort by
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={filterAscending}>
              Price: Low to High
            </DropdownMenuItem>
            <DropdownMenuItem onClick={filterDescending}>
              Price: High to Low
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-2 overflow-hidden border-l border-t sm:rounded-xl md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <CardProduct
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  )
}
