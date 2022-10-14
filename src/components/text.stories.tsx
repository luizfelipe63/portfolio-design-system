import { Text, textProps } from "./text";
import { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'components/text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
    size: 'md'
  },

  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio'
    }
  }


} as Meta<textProps>

export const Default: StoryObj<textProps> = {}

export const Small: StoryObj<textProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<textProps> = {
  args: {
    size: 'lg'
  }
}

export const customComponet: StoryObj<textProps> = {
  args: {
    asChild: true,
    children: (
      <a href="https://www.instagram.com/felipeluiz8a/">Testando</a>
    )
  },

  argTypes: {
    children: {
      table: {
        disable: true
      }
    },

    asChild: {
      table: {
        disable: true
      }
    }
  }
}
