import { Skeleton } from '@/components/ui/skeleton'
import { WrapperProduct } from '../components/wrapper-product'

export default function Loading() {
  return (
    <>
      <div className="mb-4">
        <Skeleton className="mb-2 h-6 w-24" />
        <Skeleton className="h-5 w-16" />
      </div>
      <WrapperProduct>
        {Array(12)
          .fill(null)
          .map((item, index) => (
            <div
              key={index}
              className="flex h-full w-full flex-col gap-2 border-b border-r p-2"
            >
              <Skeleton className="aspect-square h-full w-full" />
              <Skeleton className="h-[86px] w-full" />
            </div>
          ))}
      </WrapperProduct>
    </>
  )
}
