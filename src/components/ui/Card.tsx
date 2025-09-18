import { ReactNode, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`bg-white rounded-lg shadow-md p-6 ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
