import {
  component$,
  useSignal,
  $,
  Component,
  CSSProperties,
  QRL,
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
  class?: string
  style?: CSSProperties
  onSelect?: QRL<(id: any) => undefined>
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
  onSelect?: QRL<(id: any) => undefined>
}>(
  ({
    node,
    ToggleComponent = undefined,
    ContentComponent = undefined,
    isDisabled = false,
    onSelect,
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
                node.isToggleDisabled || isDisabled ? `not-allowed` : `pointer`,
            }}
          >
            <ToggleComponent
              node={node}
              isExpanded={isExpanded.value ? isExpanded.value : false}
            />
          </div>
          <button
            onclick$={$(() => {
              onSelect && onSelect(node.id)
            })}
            class={'cc-treeNode-content'}
          >
            <ContentComponent
              node={node}
              isExpanded={isExpanded.value ? isExpanded.value : false}
            />
          </button>
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
                onSelect={onSelect}
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
    class: className = undefined,
    style = undefined,
    onSelect,
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
            onSelect={onSelect}
          />
        ))}
      </div>
    )
  }
)
