import { type ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button = ({
  className,
  children,
  theme,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...props}
    >
      {children}
    </button>
  )
}
