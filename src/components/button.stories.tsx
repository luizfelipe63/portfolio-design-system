import { Button, buttonProps } from "./button";
import { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'components/button',
  component: Button,
  args: {
    children: 'Creat account',
  },

} as Meta<buttonProps>

export const Default: StoryObj<buttonProps> = {}

