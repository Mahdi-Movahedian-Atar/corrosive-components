import {
    component$,
    useSignal,
    $,
    Component,
    CSSProperties,
} from '@builder.io/qwik'
export interface TreeNode {
    id: any
    label: string
    expanded?: boolean
    children?: TreeNode[]
    isToggleDisabled?: boolean
}
export interface TreeViewProps {
    nodes: TreeNode[]
    disableAll?: boolean
    toggleComponent?: Component<{ node: TreeNode; isExpanded: boolean }>
    contentComponent?: Component<{ node: TreeNode; isExpanded: boolean }>
    className?: string
    style?: CSSProperties
}

const TComponent = $((props: { node: TreeNode; isExpanded: boolean }) => {
    return (
        <i
            style={{ marginRight: '.5rem' }}
            class={`${props.isExpanded ? 'cc-shortArrow-down' : 'cc-shortArrow-left'} cc-icon-small`}
        />
    )
})
const CComponent = $((props: { node: TreeNode; isExpanded: boolean }) => {
    return <div>{props.node.label}</div>
})

const TreeNodeComponent = component$<{
    node: TreeNode
    ToggleComponent: any
    ContentComponent: any
    isDisabled: boolean
}>(
    ({
        node,
        ToggleComponent = undefined,
        ContentComponent = undefined,
        isDisabled = false,
    }) => {
        const isExpanded = useSignal(node.expanded)

        const handleToggle = $(() => {
            if (!node.isToggleDisabled && !isDisabled) {
                isExpanded.value = !isExpanded.value
            }
        })

        return (
            <div>
                <div class={'cc-treeNode'}>
                    <div
                        onClick$={handleToggle}
                        class={'cc-treeNode-toggle'}
                        style={{
                            cursor:
                                node.isToggleDisabled || isDisabled
                                    ? `not-allowed`
                                    : `pointer`,
                        }}
                    >
                        <ToggleComponent
                            node={node}
                            isExpanded={
                                isExpanded.value ? isExpanded.value : false
                            }
                        />
                    </div>
                    <ContentComponent
                        node={node}
                        isExpanded={isExpanded.value ? isExpanded.value : false}
                    />
                </div>
                {isExpanded.value && node.children && (
                    <div style={{ marginLeft: 20 }}>
                        {node.children.map((childNode) => (
                            <TreeNodeComponent
                                key={childNode.id}
                                node={childNode}
                                ToggleComponent={ToggleComponent}
                                ContentComponent={ContentComponent}
                                isDisabled={isDisabled}
                            />
                        ))}
                    </div>
                )}
            </div>
        )
    }
)

export const TreeView = component$<TreeViewProps>(
    ({
        nodes,
        toggleComponent = TComponent,
        contentComponent = CComponent,
        disableAll = false,
        className = undefined,
        style = undefined,
    }) => {
        return (
            <div class={className} style={style}>
                {nodes.map((node) => (
                    <TreeNodeComponent
                        key={node.id}
                        node={node}
                        ToggleComponent={toggleComponent}
                        ContentComponent={contentComponent}
                        isDisabled={disableAll}
                    />
                ))}
            </div>
        )
    }
)
