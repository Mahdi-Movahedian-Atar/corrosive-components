import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { ToggleButton, type ToggleButtonProps } from './toggle-button'
import { $ } from '@builder.io/qwik'

const meta: Meta<ToggleButtonProps> = {
    component: ToggleButton,
}

type Story = StoryObj<ToggleButtonProps>

export default meta

export const Primary: Story = {
    args: {
        value: false,
        disabled: false,
        color: 'primary',
        raised: false,
        rounded: false,
        className: '',
        style: {
            height: 'fit-content',
            width: 'fit-content',
        },
        onChange: $((value) => {
            console.log(value)
        }),
    },
    argTypes: {
        color: {
            options: ['success', 'error', 'warning', 'accent', 'primary'],
            control: { type: 'radio' },
        },
    },
    render: (props) => (
        <ToggleButton {...props}>
            <h1>Buttom</h1>
        </ToggleButton>
    ),
}
