import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { Button, type ButtonProps } from './button'
import { $ } from '@builder.io/qwik'

const meta: Meta<ButtonProps> = {
  component: Button,
}

type Story = StoryObj<ButtonProps>

export default meta

export const Primary: Story = {
  args: {
    disabled: false,
    variant: 'solid',
    color: 'primary',
    raised: false,
    rounded: false,
    class: '',
    style: {
      height: 'fit-content',
      width: 'fit-content',
    },
    onClick: $(() => {
      console.log('click')
    }),
  },
  argTypes: {
    variant: {
      options: ['solid', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['success', 'error', 'warning', 'accent', 'primary'],
      control: { type: 'radio' },
    },
  },
  render: (props) => (
    <Button {...props}>
      <h1>Buttom</h1>
    </Button>
  ),
}
