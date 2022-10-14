import { textInput, inputRootProps } from "./input";
import { Envelope } from 'phosphor-react'
import { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'components/input',
  component: textInput.Root,
  args: {
    children: [
      <textInput.icon>
        <Envelope />
      </textInput.icon>,
      <textInput.Input placeholder="Type email address..." />
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
      <textInput.Input placeholder="Type email address..." />
    )
  }
}

