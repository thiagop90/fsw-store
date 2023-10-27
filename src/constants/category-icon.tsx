import {
  Headphones,
  Keyboard,
  Monitor,
  Mouse,
  Speaker,
  Square,
} from 'lucide-react'

const className = 'h-10 w-10 group-hover:animate-wiggle'
const strokeWidth = '1.25'

export const categoryIcon = {
  keyboards: <Keyboard strokeWidth={strokeWidth} className={className} />,
  monitors: <Monitor strokeWidth={strokeWidth} className={className} />,
  headphones: <Headphones strokeWidth={strokeWidth} className={className} />,
  mousepads: <Square strokeWidth={strokeWidth} className={className} />,
  speakers: <Speaker strokeWidth={strokeWidth} className={className} />,
  mouses: <Mouse strokeWidth={strokeWidth} className={className} />,
}
