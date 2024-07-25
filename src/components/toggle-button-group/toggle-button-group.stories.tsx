import type { Meta, StoryObj } from 'storybook-framework-qwik'
import {
    ToggleButtonGroup,
    type ToggleButtonGroupProps,
} from './toggle-button-group'
import { $ } from '@builder.io/qwik'

const meta: Meta<ToggleButtonGroupProps> = {
    component: ToggleButtonGroup,
}

type Story = StoryObj<ToggleButtonGroupProps>

export default meta

export const Primary: Story = {
    args: {
        members: [
            {
                id: 0,
                color: 'success',
                onChange: $((value) => {
                    console.log(value)
                }),
                value: true,
            },
            { id: 1, disabled: true },
            { id: 2 },
        ],
        disabled: false,
        exclusive: false,
        color: 'primary',
        vertical: false,
        raised: false,
        rounded: false,
        className: '',
        style: {
            height: 'fit-content',
            width: 'fit-content',
        },
    },
    argTypes: {
        color: {
            options: ['success', 'error', 'warning', 'accent', 'primary'],
            control: { type: 'radio' },
        },
    },
    render: (props) => (
        <ToggleButtonGroup {...props}>
            <h1 q:slot={'0'}>Buttom</h1>
            <h1 q:slot={'1'}>Buttom</h1>
            <h1 q:slot={'2'}>Buttom</h1>
        </ToggleButtonGroup>
    ),
}
