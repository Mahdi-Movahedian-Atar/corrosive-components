import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { Tooltip, TooltipProps } from './tooltip'
import { Button } from '../button/button'

const meta: Meta<TooltipProps> = {
    component: Tooltip,
}

type Story = StoryObj<TooltipProps>

export default meta

export const Primary: Story = {
    args: {
        isActive: false,
        disabled: false,
        position: 'bottom',
        delay: 10,
        variant: 'outlined',
        color: 'primary',
        style: { height: 'fit-content', width: 'fit-content' },
        className: undefined,
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
        position: {
            options: ['top', 'right', 'bottom', 'left'],
            control: { type: 'radio' },
        },
    },
    render: (props) => (
        <div
            style={{
                position: 'relative',
                height: 'fit-content',
                width: 'fit-content',
                margin: '50px',
            }}
        >
            <Tooltip {...props}>
                <Button>Button</Button>
                <div q:slot={'content'}>
                    <h5>0001555</h5>
                </div>
            </Tooltip>
        </div>
    ),
}
