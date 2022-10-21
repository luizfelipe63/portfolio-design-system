import { Envelope, Lock } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Button } from '../components/button'
import { CheckBox } from '../components/checkbox'
import { Heading } from '../components/heading'
import { TextInput } from '../components/input'
import { Text } from '../components/text'
import { Logo } from '../logo'



export function SignIn() {
  
  const [isUserSignIn, setIsUserSignIn] = useState(false)

  function handleSignIn(event:FormEvent){
    event.preventDefault()
    setIsUserSignIn(true)
  } 


  return (
    <div className='w-screen h-screen bg-bg flex items-center justify-center text-gray-800 flex-col'>
      <header className='flex flex-col items-center '>

        <Heading size='lg' className='mt-4'>
          Luiz<span className='text-blue'>Felipe</span>
        </Heading>

        <Text size='md' className='text-gray-800 mt-2'>
          Faça seu login e comece a usar
        </Text>
      </header>

      <form onSubmit={handleSignIn}  className=' flex flex-col items-stretch gap-4 w-full mt-10 max-w-sm'>
        {isUserSignIn && <Text>Login Realizado!</Text>}
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold text-black' >
            Endereço de email
          </Text>
          <TextInput.Root>
            <TextInput.icon>
              <Envelope />
            </TextInput.icon>
            <TextInput.Input type="email" id='email' placeholder='Digite seu email...'>
            </TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold text-black' >
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.icon>
              <Lock />
            </TextInput.icon>
            <TextInput.Input type="password" id='password' placeholder= '*******'>
            </TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-3'>
          <CheckBox id='remember' />
          <Text className='text-gray-800'>
            Lembre de mim por 30 dias
          </Text>
        </label>
        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col gap-4 items-center mt-8'>
        <Text asChild size='sm'>
          <a href="" className='font-semibold text-gray-500 underline'>Esqueceu sua senha?</a>
        </Text>
        <Text size='sm'>
          <a href="" className='font-semibold text-gray-500 underline'>Não possui conta? Crie agora</a>
        </Text>
      </footer>

    </div>
  )
}