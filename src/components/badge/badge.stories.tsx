import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { Badge, BadgeProps } from './badge'
import { Avatar } from './../avatar/avatar'

const meta: Meta<BadgeProps> = {
  component: Badge,
}

type Story = StoryObj<BadgeProps>

export default meta

export const Primary: Story = {
  args: {
    size: 15,
    sizeType: 'px',
    shape: 'circle',
    variant: 'solid',
    color: 'primary',
    position: 'top-left',
    class: undefined,
    style: {
      height: 0,
      width: 0,
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
    variant: {
      options: ['solid', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['success', 'error', 'warning', 'accent', 'primary'],
      control: { type: 'radio' },
    },
    position: {
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      control: { type: 'radio' },
    },
  },
  render: (props) => (
    <Avatar>
      <Badge {...props}>1555</Badge>
    </Avatar>
  ),
}
