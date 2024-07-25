import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { Slider, SliderProps } from './slider'
import { $ } from '@builder.io/qwik'

const meta: Meta<SliderProps> = {
    component: Slider,
}

type Story = StoryObj<SliderProps>

export default meta

export const Primary: Story = {
    args: {
        disabled: false,
        vertical: false,
        color: 'primary',
        floatingValues: 'set',
        type: 'maxRange',
        steps: undefined,
        defaultMin: 0,
        defaultMax: 100,
        min: 0,
        max: 100,
        tolerance: 1,
        className: undefined,
        style: { height: '100%', width: '100%' },
        onChange: $((min, max) => console.log(min, max)),
    },
    argTypes: {
        floatingValues: {
            options: ['unset', 'set', 'alwaysShow'],
            control: { type: 'radio' },
        },
        type: {
            options: ['minRange', 'maxRange', 'dual'],
            control: { type: 'radio' },
        },
        color: {
            options: ['success', 'error', 'warning', 'accent', 'primary'],
            control: { type: 'radio' },
        },
    },
    render: (props) => <Slider {...props}></Slider>,
}
