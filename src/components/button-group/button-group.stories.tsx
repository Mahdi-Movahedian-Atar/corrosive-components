import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { ButtonGroup, type ButtonGroupProps } from './button-group'
import { $ } from '@builder.io/qwik'

const meta: Meta<ButtonGroupProps> = {
    component: ButtonGroup,
}

type Story = StoryObj<ButtonGroupProps>

export default meta

export const Primary: Story = {
    args: {
        members: [
            {
                id: 0,
                color: 'success',
                onClick: $(() => {
                    console.log('click')
                }),
            },
            { id: 1 },
            { id: 2 },
        ],
        disabled: false,
        variant: 'solid',
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
        <ButtonGroup {...props}>
            <h1 q:slot={'0'}>Buttom</h1>
            <h1 q:slot={'1'}>Buttom</h1>
            <h1 q:slot={'2'}>Buttom</h1>
        </ButtonGroup>
    ),
}
