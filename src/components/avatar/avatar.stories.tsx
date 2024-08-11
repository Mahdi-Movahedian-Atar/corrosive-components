import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { Avatar, AvatarProps } from './avatar'

const meta: Meta<AvatarProps> = {
  component: Avatar,
}

type Story = StoryObj<AvatarProps>

export default meta

export const Primary: Story = {
  args: {
    src: '',
    alt: 'avatar',
    size: 50,
    sizeType: 'px',
    shape: 'circle',
    fallback: 'Fb',
    fallbackVariant: 'solid',
    fallbackColor: 'primary',
    class: undefined,
    height: 900,
    width: 900,
    style: {
      height: 'fit-content',
      width: 'fit-content',
    },
  },
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
    },
    sizeType: {
      options: ['rem', 'rm', 'px'],
      control: { type: 'radio' },
    },
    fallbackVariant: {
      options: ['solid', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    fallbackColor: {
      options: ['success', 'error', 'warning', 'accent', 'primary'],
      control: { type: 'radio' },
    },
  },
  render: (props) => <Avatar {...props}></Avatar>,
}
