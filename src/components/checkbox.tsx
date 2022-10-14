import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'


export interface checkBoxProps { }


export function checkBox({ }: checkBoxProps) {
  return (
    <CheckboxPrimitive.Root className=' w-6 h-6 p-[2px] bg-gray-200 rounded'>
      <CheckboxPrimitive.Indicator>
        <Check weight='bold' className='h-5 w-5 text-blue' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}