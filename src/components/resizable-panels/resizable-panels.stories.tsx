import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { ResizablePanels, ResizablePanelsProps } from './resizable-panels'

const meta: Meta<ResizablePanelsProps> = {
    component: ResizablePanels,
}

type Story = StoryObj<ResizablePanelsProps>

export default meta

export const Primary: Story = {
    args: {
        disabled: false,
        vertical: false,
        defaultOffset: 50,
        min: 0,
        max: 100,
        collapsableLeft: 0,
        collapsableRight: 100,
        style: { height: '500px', width: '500px' },
        className: undefined,
    },
    render: (props) => (
        <ResizablePanels {...props}>
            <div q:slot={'firstPanel'}>First Panel</div>
            <div q:slot={'secondPanel'}>Second Panel</div>
        </ResizablePanels>
    ),
}
