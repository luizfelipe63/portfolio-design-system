import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';




export interface headingProps {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode,
  asChild?: boolean,
  className?: string
}


export function Heading({ size = 'md', children, asChild, className }: headingProps) {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp className={
      clsx
        ("text-gray-800 font-semibold font-sans",
          {
            'text-lg': size == 'sm',
            'text-xl': size == 'md',
            'text-2xl': size == 'lg'
          },
          className,
        )
    }
    >
      {children}
    </Comp>
  )
}