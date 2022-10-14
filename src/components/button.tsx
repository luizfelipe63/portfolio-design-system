import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface buttonProps {
  children: ReactNode,
  asChild?: boolean
}


export function button({ children, asChild }: buttonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={
      clsx
        ("py-4 px-3 bg-blue text-whith font-semibold w-full rounded text-sm font-sans hover:bg-blue-900 transition-colors ",
        )
    }
    >
      {children}
    </Comp>
  )
}