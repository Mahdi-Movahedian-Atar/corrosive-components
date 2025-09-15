import{_ as e}from "./q-DXM0pR1l.js";import{H as r,q as t}from "./q-8bdPC3mX.js";const a=`.cc-expandable {
  border-radius: var(--corner);
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  z-index: 9999;
  border: var(--width) solid;
  padding: var(--width);
  cursor: pointer;
  scrollbar-width: thin;
  scrollbar-color: currentColor var(--secondary-0);
  scrollbar-arrow-color: currentColor;
  scrollbar-gutter: both-edges;
}

.cc-expandable-primary {
  background: var(--primary-0);
  border-color: var(--primary-0);
  color: var(--primary-0);
}

.cc-expandable-success {
  background: var(--success-0);
  border-color: var(--success-0);
  color: var(--success-0);
}

.cc-expandable-error {
  background: var(--error-0);
  border-color: var(--error-0);
  color: var(--error-0);
}

.cc-expandable-warning {
  background: var(--warning-0);
  border-color: var(--warning-0);
  color: var(--warning-0);
}

.cc-expandable-accent {
  background: var(--accent-0);
  border-color: var(--accent-0);
  color: var(--accent-0);
}

.cc-expandable-solid {
  color: var(--secondary-0);
}

.cc-expandable-text {
  border-color: transparent;
  background: transparent;
}

.cc-expandable-outlined {
  background: transparent;
}`,i=`export interface ExpandableProps {
  class?: string
  visible?: boolean
  style?: CSSProperties
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  variant?: 'solid' | 'outlined' | 'text'
  maxHeight?: number
  direction?: 'down' | 'up' | 'left' | 'right'
}

export const Expandable = component$<ExpandableProps>(
  ({
    visible = false,
    class: className,
    style = {
      height: 'fit-content',
      width: 'fit-content',
    },
    variant = 'outlined',
    color = 'primary',
    maxHeight = 100,
    direction = 'down',
  }) => {
    const ref = useSignal<Element>()

    useVisibleTask$(() => {
      const element = ref.value?.getBoundingClientRect()
      if (element == undefined) return
      const elementPosition = [
        element.bottom,
        element.top,
        element.left,
        element.right,
      ]
      if (direction == 'left' || direction == 'right') {
        elementPosition[0] += element.height / 2
        elementPosition[1] -= element.height / 2
      }
      if (elementPosition[0] > window.innerHeight) {
        // @ts-ignore
        ref.value.style.top = 'unset'
        // @ts-ignore
        ref.value.style.bottom = '0vh'
        // @ts-ignore
        ref.value.style.transform = 'unset'
      }
      if (elementPosition[1] < 0) {
        // @ts-ignore
        ref.value.style.bottom = 'unset'
        // @ts-ignore
        ref.value.style.top = '0vh'
        // @ts-ignore
        ref.value.style.transform = 'unset'
      }
      if (elementPosition[2] < 0) {
        // @ts-ignore
        ref.value.style.right = 'unset'
        // @ts-ignore
        ref.value.style.left = '0vh'
      }
      if (elementPosition[3] > window.innerWidth) {
        // @ts-ignore
        ref.value.style.left = 'unset'
        // @ts-ignore
        ref.value.style.right = '0vw'
      }
    })

    return (
      <div class={className} style={style}>
        {visible && (
          <div
            class={\`cc-expandable cc-expandable-\${variant} cc-expandable-\${color}\`}
            style={{
              maxHeight,
              bottom: direction == 'up' ? '100%' : 'unset',
              top:
                direction == 'down'
                  ? '100%'
                  : direction == 'left' || direction == 'right'
                    ? '50%'
                    : 'unset',
              left: direction == 'right' ? '100%' : 'unset',
              right: direction == 'left' ? '100%' : 'unset',
              transform:
                direction == 'left' || direction == 'right'
                  ? 'translateY(-50%)'
                  : 'unset',
            }}
            ref={ref}
          >
            <Slot />
          </div>
        )}
      </div>
    )
  }
)
`,l=r(t(()=>e(()=>import("./q-ClBMyCi7.js"),[]),"s_udOYc0mlUrg"));export{a as _auto_cssCode,i as _auto_tsCode,l as default};
