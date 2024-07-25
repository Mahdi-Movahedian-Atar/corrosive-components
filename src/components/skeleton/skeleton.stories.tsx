import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { Skeleton, skeletonProps } from './skeleton'

const meta: Meta<skeletonProps> = {
    component: Skeleton,
}

type Story = StoryObj<skeletonProps>

export default meta

export const Primary: Story = {
    args: {
        height: '100%',
        width: '100%',
        animation: 'wave',
        variant: 'solid',
        color: 'primary',
        rounded: false,
        className: undefined,
        style: {
            display: 'inline-flex',
            height: '100%',
            width: '100%',
            alignContent: 'center',
        },
    },
    argTypes: {
        variant: {
            options: ['solid', 'outlined'],
            control: { type: 'radio' },
        },
        color: {
            options: ['success', 'error', 'warning', 'accent', 'primary'],
            control: { type: 'radio' },
        },
        animation: {
            options: ['wave', 'pulse', 'none'],
            control: { type: 'radio' },
        },
    },
    render: (props) => <Skeleton {...props}></Skeleton>,
}
