import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { FileInput, type FileInputProps } from './file-input'
import { $ } from '@builder.io/qwik'
import { Button } from '../button/button'

const meta: Meta<FileInputProps> = {
    component: FileInput,
}

type Story = StoryObj<FileInputProps>

export default meta

export const Primary: Story = {
    args: {
        placeholder: undefined,
        disabled: false,
        variant: 'solid',
        color: 'primary',
        raised: false,
        rounded: false,
        accept: '',
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
    },
    render: (props) => (
        <FileInput {...props}>
            {' '}
            <Button q:slot={'left'}>left</Button>{' '}
            <Button q:slot={'right'}>right</Button>{' '}
        </FileInput>
    ),
}
