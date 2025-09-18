import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '' 
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} hover:scale-105 active:scale-95 transition-transform duration-150`
  
  // Smooth scroll for anchor links
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    if (onClick) onClick()
  }

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a href={href} className={classes} onClick={handleClick}>
          {children}
        </a>
      )
    }
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  
  return (
    <button onClick={handleClick} className={classes}>
      {children}
    </button>
  )
}
