import { ProductWithTotalPrice } from '@/helpers/products'
import Image from 'next/image'
import { Badge } from './ui/badge'
import { ArrowDown } from 'lucide-react'

type ProductItemProps = {
  product: ProductWithTotalPrice
}

export function ProductItem({ product }: ProductItemProps) {
  const formattedBasePrice = Number(product.basePrice).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const formattedTotalPrice = Number(product.totalPrice).toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    },
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: 'contain',
          }}
          alt={product.name}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-2 py-0.5">
            <ArrowDown className="h-4 w-4" /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-bold">{formattedTotalPrice}</p>
              <p className="text-xs text-muted-foreground line-through">
                {formattedBasePrice}
              </p>
            </>
          ) : (
            <p className="font-semibold">{formattedBasePrice}</p>
          )}
        </div>
      </div>
    </div>
  )
}
