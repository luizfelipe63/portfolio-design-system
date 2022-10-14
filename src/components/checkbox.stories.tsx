import { checkBox, checkBoxProps } from './checkbox'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'

export default {
  title: 'components/checkBox',
  component: checkBox,
  args: {
  },
  argTypes: {},
  decorators: [
    (story) => {
      return (
        <div className='flex items-center gap-2'>
          {story()}
          <Text size='sm'> Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ]

} as Meta<checkBoxProps>

export const Default: StoryObj<checkBoxProps> = {}