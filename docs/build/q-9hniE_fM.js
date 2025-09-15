import{_ as c}from "./q-DXM0pR1l.js";import{H as r,q as l}from "./q-8bdPC3mX.js";const a=`.cc-scrollPanel-parent {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.cc-scrollPanel {
  height: 100%;
  width: 100%;
}

.cc-scrollPanel-wrapper {
  scrollbar-width: none;
  height: 100%;
  width: 100%;
}

.cc-scrollPanel-bar-h,
.cc-scrollPanel-bar-v {
  background: var(--secondary-0);
  position: relative;
  border: solid var(--width);
  border-radius: 1rem;
}
.cc-scrollPanel-bar-v {
  width: 1rem;
}
.cc-scrollPanel-bar-h {
  height: 1rem;
  width: 100%;
}
.cc-scrollPanel-parent:has(> .cc-scrollPanel-bar-v) ~ .cc-scrollPanel-bar-h {
  width: calc(100% - 1rem - var(--width));
}

.cc-scrollPanel-bar-h > span,
.cc-scrollPanel-bar-v > span {
  position: absolute;
  background: currentColor;
  border-radius: 1rem;
  border: solid inherit var(--width);
}
.cc-scrollPanel-bar-v > span {
  cursor: n-resize;
  width: 100%;
}
.cc-scrollPanel-bar-h > span {
  cursor: e-resize;
  height: 100%;
}

.cc-scrollPanel-primary .cc-scrollPanel-bar-v,
.cc-scrollPanel-primary .cc-scrollPanel-bar-h {
  border-color: var(--primary-0);
  color: var(--primary-0);
}
.cc-scrollPanel-primary .cc-scrollPanel-bar-v:hover,
.cc-scrollPanel-primary .cc-scrollPanel-bar-h:hover {
  border-color: var(--primary-2);
  color: var(--primary-2);
}
.cc-scrollPanel-primary .cc-scrollPanel-bar-v:active,
.cc-scrollPanel-primary .cc-scrollPanel-bar-h:active {
  border-color: var(--tertiary-2);
  color: var(--tertiary-2);
}

.cc-scrollPanel-success .cc-scrollPanel-bar-v,
.cc-scrollPanel-success .cc-scrollPanel-bar-h {
  border-color: var(--success-0);
  color: var(--success-0);
}
.cc-scrollPanel-success .cc-scrollPanel-bar-v:hover,
.cc-scrollPanel-success .cc-scrollPanel-bar-h:hover {
  border-color: var(--success-1);
  color: var(--success-1);
}
.cc-scrollPanel-success .cc-scrollPanel-bar-v:active,
.cc-scrollPanel-success .cc-scrollPanel-bar-h:active {
  border-color: var(--success-2);
  color: var(--success-2);
}

.cc-scrollPanel-error .cc-scrollPanel-bar-v,
.cc-scrollPanel-error .cc-scrollPanel-bar-h {
  border-color: var(--error-0);
  color: var(--error-0);
}
.cc-scrollPanel-error .cc-scrollPanel-bar-v:hover,
.cc-scrollPanel-error .cc-scrollPanel-bar-h:hover {
  border-color: var(--error-1);
  color: var(--error-1);
}
.cc-scrollPanel-error .cc-scrollPanel-bar-v:active,
.cc-scrollPanel-error .cc-scrollPanel-bar-h:active {
  border-color: var(--error-2);
  color: var(--error-2);
}

.cc-scrollPanel-warning .cc-scrollPanel-bar-v,
.cc-scrollPanel-warning .cc-scrollPanel-bar-h {
  border-color: var(--warning-0);
  color: var(--warning-0);
}
.cc-scrollPanel-warning .cc-scrollPanel-bar-v:hover,
.cc-scrollPanel-warning .cc-scrollPanel-bar-h:hover {
  border-color: var(--warning-1);
  color: var(--warning-1);
}
.cc-scrollPanel-warning .cc-scrollPanel-bar-v:active,
.cc-scrollPanel-warning .cc-scrollPanel-bar-h:active {
  border-color: var(--warning-2);
  color: var(--warning-2);
}

.cc-scrollPanel-accent .cc-scrollPanel-bar-v,
.cc-scrollPanel-accent .cc-scrollPanel-bar-h {
  border-color: var(--accent-0);
  color: var(--accent-0);
}
.cc-scrollPanel-accent .cc-scrollPanel-bar-v:hover,
.cc-scrollPanel-accent .cc-scrollPanel-bar-h:hover {
  border-color: var(--accent-1);
  color: var(--accent-1);
}
.cc-scrollPanel-accent .cc-scrollPanel-bar-v:active,
.cc-scrollPanel-accent .cc-scrollPanel-bar-h:active {
  border-color: var(--accent-2);
  color: var(--accent-2);
}`,n=`$("export interface ScrollPanelProps {"}
  class?: string
  style?: CSSProperties
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  direction?: 'vertical' | 'horizontal' | 'both'
}

export const ScrollPanel = component$<ScrollPanelProps>(
  ({
    class: className = undefined,
    style,
    color = 'primary',
    direction = 'both',
  }) => {
    const ref = useSignal<Element>()

    const vertical = useStore([0, 0])
    const horizontal = useStore([0, 0])
    const start = useStore([0, 0])

    const isVerticalActive = useSignal(false)
    const isHorizontalActive = useSignal(false)

    const onScroll = $(() => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
        scrollLeft,
        scrollWidth,
        clientWidth,
      } = ref.value as HTMLDivElement
      vertical[0] = clientHeight / scrollHeight
      vertical[1] = scrollTop / (scrollHeight - clientHeight)
      horizontal[0] = clientWidth / scrollWidth
      horizontal[1] = scrollLeft / (scrollWidth - clientWidth)
    })

    const manualScroll = $((e: MouseEvent | TouchEvent) => {
      if (isVerticalActive.value) {
        let deltaY =
          ('clientY' in e ? e.clientY : e.touches[0].clientY) - start[0]
        deltaY /= vertical[0]
        ;(ref.value as HTMLDivElement).scrollBy({
          top: deltaY,
          behavior: 'instant',
        })
        start[0] = 'clientY' in e ? e.clientY : e.touches[0].clientY
      }
      if (isHorizontalActive.value) {
        let deltaX =
          ('clientX' in e ? e.clientX : e.touches[0].clientX) - start[1]
        deltaX /= horizontal[0]
        ;(ref.value as HTMLDivElement).scrollBy({
          left: deltaX,
          behavior: 'instant',
        })
        start[1] = 'clientX' in e ? e.clientX : e.touches[0].clientX
      }
    })

    const activeHorizontal = $((e: MouseEvent | TouchEvent) => {
      isHorizontalActive.value = true
      start[1] = 'clientX' in e ? e.clientX : e.touches[0].clientX
    })
    const deActiveHorizontal = $(() => (isHorizontalActive.value = false))
    const activeVertical = $((e: MouseEvent | TouchEvent) => {
      isVerticalActive.value = true
      start[0] = 'clientY' in e ? e.clientY : e.touches[0].clientY
    })
    const deActiveVertical = $(() => (isVerticalActive.value = false))

    useVisibleTask$(({ track }) => {
      track(() => ref.value)
      onScroll()
    })

    return (
      <div class={className} style={style}>
        <div class={\`cc-scrollPanel cc-scrollPanel-\${color}\`}>
          <div class={\`cc-scrollPanel-parent\`}>
            <div
              ref={ref}
              class={\`cc-scrollPanel-wrapper\`}
              style={{
                overflowX: direction != 'vertical' ? 'scroll' : 'hidden',
                overflowY: direction != 'horizontal' ? 'scroll' : 'hidden',
              }}
              onScroll$={onScroll}
            >
              <Slot />
            </div>
            {direction != 'horizontal' && (
              <div
                onMouseMove$={manualScroll}
                onMouseDown$={activeVertical}
                onMouseUp$={deActiveVertical}
                onMouseLeave$={deActiveVertical}
                onTouchStart$={activeVertical}
                onTouchEnd$={deActiveVertical}
                onTouchMove$={manualScroll}
                class={\`cc-scrollPanel-bar-v\`}
              >
                <span
                  style={{
                    height: \`\${vertical[0] * 100}%\`,
                    top: \`\${(1 - vertical[0]) * vertical[1] * 100}%\`,
                  }}
                />
              </div>
            )}
          </div>
          {direction != 'vertical' && (
            <div
              onMouseMove$={manualScroll}
              onMouseDown$={activeHorizontal}
              onMouseUp$={deActiveHorizontal}
              onMouseLeave$={deActiveHorizontal}
              onTouchStart$={activeHorizontal}
              onTouchEnd$={deActiveHorizontal}
              onTouchMove$={manualScroll}
              class={\`cc-scrollPanel-bar-h\`}
            >
              <span
                style={{
                  width: \`\${horizontal[0] * 100}%\`,
                  left: \`\${(1 - horizontal[0]) * horizontal[1] * 100}%\`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
)`,s=r(l(()=>c(()=>import("./q-Dr5EHQuz.js"),[]),"s_akwygQf6kME"));export{a as _auto_cssCode,n as _auto_tsCode,s as default};
