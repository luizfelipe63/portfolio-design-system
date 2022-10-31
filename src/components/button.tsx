import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  asChild?: boolean
}


export function Button({ children, asChild, className, ...props }: buttonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={
      clsx
        ("py-3 px-4 bg-blue text-whith font-semibold w-full rounded text-sm font-sans hover:bg-blue-900 transition-colors ", className
        )}
      {...props}
    >
      {children}
    </Comp>
  )
}