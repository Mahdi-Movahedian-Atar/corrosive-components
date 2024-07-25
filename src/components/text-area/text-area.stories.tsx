import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { TextArea, type TextAreaProps } from './text-area'
import { $ } from '@builder.io/qwik'
import { Button } from '../button/button'

const meta: Meta<TextAreaProps> = {
    component: TextArea,
}

type Story = StoryObj<TextAreaProps>

export default meta

export const Primary: Story = {
    args: {
        value: 'text',
        cols: 20,
        rows: 2,
        maxLength: Number.MAX_SAFE_INTEGER,
        resize: 'both',
        placeholder: undefined,
        disabled: false,
        variant: 'solid',
        color: 'primary',
        raised: false,
        rounded: false,
        floatingPlaceholder: true,
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
        variant: {
            options: ['solid', 'outlined', 'text'],
            control: { type: 'radio' },
        },
        color: {
            options: ['success', 'error', 'warning', 'accent', 'primary'],
            control: { type: 'radio' },
        },
        resize: {
            options: ['horizontal', 'vertical', 'both', 'none'],
            control: { type: 'radio' },
        },
    },
    render: (props) => (
        <TextArea {...props}>
            {' '}
            <Button q:slot={'left'}>left</Button>{' '}
            <Button q:slot={'right'}>left</Button>{' '}
        </TextArea>
    ),
}
