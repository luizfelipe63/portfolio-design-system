import { heading, headingProps } from "./heading";
import { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'components/heading',
  component: heading,
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


} as Meta<headingProps>

export const Default: StoryObj<headingProps> = {}

export const Small: StoryObj<headingProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<headingProps> = {
  args: {
    size: 'lg'
  }
}

export const customComponet: StoryObj<headingProps> = {
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
