import { TextInput, inputRootProps } from "./input";
import { Envelope } from 'phosphor-react'
import { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'components/input',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.icon>
        <Envelope />
      </TextInput.icon>,
      <TextInput.Input placeholder="Type email address..." />
    ],

  },

} as Meta<inputRootProps>

export const Default: StoryObj<inputRootProps> = {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}
export const noIcon: StoryObj<inputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder="Type email address..." />
    )
  }
}

