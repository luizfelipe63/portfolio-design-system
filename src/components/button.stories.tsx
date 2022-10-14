import { button, buttonProps } from "./button";
import { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'components/button',
  component: button,
  args: {
    children: 'Creat account',
  },

} as Meta<buttonProps>

export const Default: StoryObj<buttonProps> = {}

