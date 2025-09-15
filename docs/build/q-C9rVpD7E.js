import{_ as e}from"./q-uemlvruI.js";import{H as o,q as n}from"./q-8bdPC3mX.js";const s=`.cc-treeNode {
  display: flex;
  flex-direction: row;
  position: relative;
}

.cc-treeNode:hover {
  background: var(--accent-0);
}

.cc-treeNode-toggle {
  cursor: pointer;
}

.cc-treeNode-content {
  cursor: pointer;
}`,l=`export interface TreeNode {
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
      class={\`\${props.isExpanded ? 'cc-shortArrow-down' : 'cc-shortArrow-left'} cc-icon-small\`}
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
                node.isToggleDisabled || isDisabled ? \`not-allowed\` : \`pointer\`,
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
)`,i=o(n(()=>e(()=>import("./q-B4d3cLjF.js"),[]),"s_q7Ye0JmuPYc"));export{s as _auto_cssCode,l as _auto_tsCode,i as default};
