import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot';


export interface inputRootProps {
  children: ReactNode
}

textInputRoot.displayName = 'textInput.Root'

function textInputRoot(props: inputRootProps) {
  return (
    <div className='bg-gray-200 flex items-center h-12 gap-3 px-3 py-4 rounded w-full focus-within:ring-2 ring-blue'>
      {props.children}
    </div>
  )
}

export interface textInconProps {
  children: ReactNode
}

textInputIcon.displayName = 'textInput.Icon'

function textInputIcon(props: textInconProps) {
  return (
    <Slot className='h-6 w-6 text-gray-800 '>
      {props.children}
    </Slot>
  )

}


export interface textInputProps extends InputHTMLAttributes<HTMLInputElement> { }

textInputInput.displayName = 'textInput.Input'


function textInputInput(props: textInputProps) {

  return (
    <input className='bg-transparent outline-none flex-1 text-gray-800 placeholder:text-gray-800 '
      {...props}
    >
    </input>
  )
}

export const textInput = {
  Root: textInputRoot,
  Input: textInputInput,
  icon: textInputIcon
}