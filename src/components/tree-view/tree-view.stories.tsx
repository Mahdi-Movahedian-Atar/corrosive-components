import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { TreeView, TreeViewProps } from './tree-view'

const meta: Meta<TreeViewProps> = {
    component: TreeView,
}

type Story = StoryObj<TreeViewProps>

export default meta

export const Primary: Story = {
    args: {
        nodes: [
            {
                id: '1',
                label: 'Node 1',
                isToggleDisabled: true,
                children: [
                    {
                        id: '1.1',
                        label: 'Node 1.1',
                    },
                    {
                        id: '1.2',
                        label: 'Node 1.2',
                        children: [
                            {
                                id: '1.2.1',
                                label: 'Node 1.2.1',
                            },
                            {
                                id: '1.2.2',
                                label: 'Node 1.2.2',
                            },
                        ],
                    },
                ],
            },
            {
                id: '2',
                label: 'Node 2',
                children: [
                    {
                        id: '2.1',
                        label: 'Node 2.1',
                    },
                ],
            },
        ],
        disableAll: false,
        className: undefined,
        style: undefined,
    },
    render: (props) => <TreeView {...props} />,
}
