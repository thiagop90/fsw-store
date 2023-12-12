import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PropsWithChildren } from 'react'

type ArrowButtonType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

const ArrowButton = (props: ArrowButtonType) => {
  const { onClick, children } = props

  return (
    <Button
      className="group h-8 w-8 rounded bg-background/80 backdrop-blur-sm"
      size="icon"
      variant="outline"
      type="button"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export function PrevButton(props: ArrowButtonType) {
  const { ...restProps } = props

  return (
    <div className="absolute inset-y-0 left-0 hidden items-center gap-2 px-4 md:flex">
      <ArrowButton {...restProps}>
        <ChevronLeft className="h-4 w-4 group-hover:text-primary" />
      </ArrowButton>
    </div>
  )
}

export const NextButton = (props: ArrowButtonType) => {
  const { ...restProps } = props

  return (
    <div className="absolute inset-y-px right-0 hidden items-center gap-2 bg-gradient-to-l from-card px-4 md:flex">
      <ArrowButton {...restProps}>
        <ChevronRight className="h-4 w-4 group-hover:text-primary" />
      </ArrowButton>
    </div>
  )
}
