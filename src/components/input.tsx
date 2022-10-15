import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot';


export interface inputRootProps {
  children: ReactNode
}

TextInputRoot.displayName = 'textInput.Root'

function TextInputRoot(props: inputRootProps) {
  return (
    <div className='bg-gray-200 flex items-center h-12 gap-3 px-3 py-4 rounded w-full focus-within:ring-2 ring-blue'>
      {props.children}
    </div>
  )
}

export interface textInconProps {
  children: ReactNode
}

TextInputIcon.displayName = 'textInput.Icon'

function TextInputIcon(props: textInconProps) {
  return (
    <Slot className='h-6 w-6 text-gray-800 '>
      {props.children}
    </Slot>
  )

}


export interface textInputProps extends InputHTMLAttributes<HTMLInputElement> { }

TextInputInput.displayName = 'textInput.Input'


function TextInputInput(props: textInputProps) {

  return (
    <input className='bg-transparent outline-none flex-1 text-gray-800 placeholder:text-gray-800 '
      {...props}
    >
    </input>
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  icon: TextInputIcon
}