import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { Select, type SelectProps } from './select'
import { $ } from '@builder.io/qwik'
import { Button } from '../button/button'

const meta: Meta<SelectProps> = {
    component: Select,
}

type Story = StoryObj<SelectProps>

export default meta

export const Primary: Story = {
    args: {
        values: [
            { option: 'names', group: true },
            { option: 'mahdi', group: false },
            { option: 'mahan', group: false },
            { option: 'ali', group: false },
            { option: 'hamed', group: false },
            { option: 'lastname', group: true },
            { option: 'movahedian', group: false },
            { option: 'niromand', group: false },
        ],
        direction: 'down',
        value: undefined,
        placeholder: 'placeholder',
        disabled: false,
        variant: 'solid',
        color: 'primary',
        raised: false,
        rounded: false,
        floatingPlaceholder: true,
        maxHeight: 100,
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
        direction: {
            options: ['down', 'up', 'left', 'right'],
            control: { type: 'radio' },
        },
        color: {
            options: ['success', 'error', 'warning', 'accent', 'primary'],
            control: { type: 'radio' },
        },
    },
    render: (props) => (
        <div>
            {' '}
            <Select
                {...props}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    padding: '500px',
                }}
            >
                {' '}
                <Button q:slot={'left'}>left</Button>{' '}
                <Button q:slot={'right'}>left</Button>{' '}
            </Select>
            <Button>ssss</Button>
        </div>
    ),
}
