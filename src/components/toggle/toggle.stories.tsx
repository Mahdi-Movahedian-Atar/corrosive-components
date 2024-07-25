import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { Toggle, type ToggleProps } from './toggle'
import { $ } from '@builder.io/qwik'

const meta: Meta<ToggleProps> = {
    component: Toggle,
}

type Story = StoryObj<ToggleProps>

export default meta

export const Primary: Story = {
    args: {
        disabled: false,
        value: false,
        variant: 'slider',
        color: 'primary',
        className: '',
        style: {
            height: '100%',
            width: '100%',
        },
        onChange: $((value) => {
            console.log(value)
        }),
    },
    argTypes: {
        variant: {
            options: ['slider', 'radio', 'checkbox'],
            control: { type: 'radio' },
        },
        color: {
            options: ['success', 'error', 'warning', 'accent', 'primary'],
            control: { type: 'radio' },
        },
    },
    render: (props) => (
        <Toggle {...props}>
            <h1>Buttom</h1>
        </Toggle>
    ),
}
