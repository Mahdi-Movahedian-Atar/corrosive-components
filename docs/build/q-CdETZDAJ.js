import{_ as e}from "./q-DXM0pR1l.js";import{H as s,q as a}from "./q-8bdPC3mX.js";const n=`.cc-resizablePanels-parent,
.cc-resizablePanels-parent-vertical {
  display: flex;
  overflow: hidden;
  height: 100%;
  position: relative;
}

.cc-resizablePanels-parent-vertical {
  flex-direction: column;
}

.cc-resizablePanels-disabled,
.cc-resizablePanels-vertical-disabled,
.cc-resizablePanels-draggable,
.cc-resizablePanels-draggable-vertical {
  justify-content: center;
  align-content: center;
  border: none;
  display: flex;
  border-radius: var(--corner);
  z-index: 999;
}

.cc-resizablePanels-draggable,
.cc-resizablePanels-disabled {
  padding-left: var(--width);
  padding-right: var(--width);
}

.cc-resizablePanels-draggable-vertical,
.cc-resizablePanels-vertical-disabled {
  padding-top: var(--width);
  padding-bottom: var(--width);
}

.cc-resizablePanels-draggable,
.cc-resizablePanels-draggable-vertical {
  background: var(--primary-0);
}

.cc-resizablePanels-disabled,
.cc-resizablePanels-vertical-disabled {
  background: var(--tertiary-0);
}

.cc-resizablePanels-draggable:hover,
.cc-resizablePanels-draggable-vertical:hover {
  background: var(--tertiary-0);
}

.cc-resizablePanels-draggable:active,
.cc-resizablePanels-draggable-vertical:active {
  background: var(--accent-0);
}

.cc-resizablePanels-draggable {
  width: var(--width);
  cursor: col-resize;
  height: auto;
}

.cc-resizablePanels-draggable-vertical {
  height: var(--width);
  cursor: row-resize;
  width: 100%;
}

.cc-resizablePanels-content,
.cc-resizablePanels-content-vertical {
  background: var(--secondary-0);
  flex-grow: 0;
  flex-shrink: 0;
  align-self: center;
  justify-self: center;
  border: none;
  border-radius: var(--width);
}

.cc-resizablePanels-content {
  height: calc(var(--width) * 8);
  width: var(--width);
}

.cc-resizablePanels-content-vertical {
  height: var(--width);
  width: calc(var(--width) * 8);
}

.cc-resizablePanels-firstPanel,
.cc-resizablePanels-secondPanel {
  position: relative;
  overflow: hidden;
  display: flex;
}

.cc-resizablePanels-secondPanel {
  display: flex;
}`,l=`export interface ResizablePanelsProps {
  disabled?: boolean
  vertical?: boolean
  onChange?: QRL<(offset: number) => void>
  min?: number
  max?: number
  defaultOffset?: number
  collapsableLeft?: number
  collapsableRight?: number
  class?: string
  style?: CSSProperties
}

export const ResizablePanels = component$<ResizablePanelsProps>(
  ({
    disabled = false,
    vertical = false,
    min = 5,
    max = 95,
    class: className = undefined,
    style,
    defaultOffset = 50,
    collapsableLeft = 0,
    collapsableRight = 100,
    onChange = undefined,
  }) => {
    const mousePosition = useStore({
      x: defaultOffset,
      y: defaultOffset,
    })
    const isMouseDown = useSignal(false)
    const thisRef = useSignal<Element>()

    const mouseMove = $((event: Event) => {
      const zoom = ((window.outerWidth - 10) / window.innerWidth) * 100

      isMouseDown.value && event.preventDefault()
      const rect = thisRef.value!.getBoundingClientRect()
      isMouseDown.value &&
        (mousePosition.x +=
          ((event as MouseEvent).movementX / rect.width / zoom) * 10000)
      isMouseDown.value &&
        (mousePosition.y +=
          ((event as MouseEvent).movementY / rect.height / zoom) * 10000)
      min && mousePosition.x < min && (mousePosition.x = min)
      max && mousePosition.x > max && (mousePosition.x = max)
      min && mousePosition.y < min && (mousePosition.y = min)
      max && mousePosition.y > max && (mousePosition.y = max)
      onChange &&
        (vertical ? onChange(mousePosition.y) : onChange(mousePosition.x))
    })
    const TouchMove = $((event: TouchEvent) => {
      const zoom = ((window.outerWidth - 10) / window.innerWidth) * 100

      const rect = thisRef.value!.getBoundingClientRect()
      isMouseDown.value && event.preventDefault()
      if (event.touches.length == 0) isMouseDown.value = false
      isMouseDown.value &&
        (mousePosition.x =
          ((event.touches[0].clientX - rect.left) / rect.width / zoom) * 10000)
      isMouseDown.value &&
        (mousePosition.y =
          ((event.touches[0].clientY - rect.top) / rect.height / zoom) * 10000)
      min && mousePosition.x < min && (mousePosition.x = min)
      max && mousePosition.x > max && (mousePosition.x = max)
      min && mousePosition.y < min && (mousePosition.y = min)
      max && mousePosition.y > max && (mousePosition.y = max)
      onChange &&
        (vertical ? onChange(mousePosition.y) : onChange(mousePosition.x))
    })
    const disableMouse = $(() => {
      !disabled && (isMouseDown.value = false)
    })
    const enableMouse = $(() => {
      !disabled && (isMouseDown.value = true)
    })

    useOn('mousemove', mouseMove)
    useOn('touchmove', TouchMove)
    useOn('mouseup', disableMouse)
    useOn('touchend', disableMouse)

    return (
      <div
        style={style}
        class={className}
        ref={thisRef}
        onmouseleave$={disableMouse}
      >
        <div
          class={
            vertical
              ? 'cc-resizablePanels-parent-vertical'
              : 'cc-resizablePanels-parent'
          }
        >
          <div
            style={
              vertical
                ? !(collapsableLeft > mousePosition.y)
                  ? mousePosition.y > collapsableRight
                    ? 'height: 100%'
                    : \`height: \${mousePosition.y}%\`
                  : 'display: none'
                : !(collapsableLeft > mousePosition.x)
                  ? mousePosition.x > collapsableRight
                    ? 'width: 100%'
                    : \`width: \${mousePosition.x}%\`
                  : 'display: none'
            }
            class={\`cc-resizablePanels-firstPanel\`}
          >
            <Slot name="firstPanel" />
          </div>
          <span
            class={
              !disabled
                ? vertical
                  ? 'cc-resizablePanels-draggable-vertical'
                  : 'cc-resizablePanels-draggable'
                : vertical
                  ? 'cc-resizablePanels-vertical-disabled'
                  : 'cc-resizablePanels-disabled'
            }
            onMouseDown$={enableMouse}
            onMouseUp$={disableMouse}
            onTouchStart$={enableMouse}
            onTouchEnd$={disableMouse}
          >
            <div
              class={
                vertical
                  ? 'cc-resizablePanels-content-vertical'
                  : 'cc-resizablePanels-content'
              }
            />
          </span>
          <div
            style={
              vertical
                ? mousePosition.y > collapsableRight
                  ? 'display: none'
                  : !(collapsableLeft > mousePosition.y)
                    ? \`height: \${100 - mousePosition.y}%\`
                    : 'height: 100%'
                : mousePosition.x > collapsableRight
                  ? 'display: none'
                  : !(collapsableLeft > mousePosition.x)
                    ? \`width: \${100 - mousePosition.x}%\`
                    : 'height: 100%'
            }
            class={'cc-resizablePanels-secondPanel'}
          >
            <Slot name="secondPanel" />
          </div>
        </div>
      </div>
    )
  }
)`,t=s(a(()=>e(()=>import("./q-l8TEXrIT.js"),[]),"s_d9buxCSnhnI"));export{n as _auto_cssCode,l as _auto_tsCode,t as default};
