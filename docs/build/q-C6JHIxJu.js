import{_ as o}from "./q-DXM0pR1l.js";import{H as e,q as r}from "./q-8bdPC3mX.js";const s=`.cc-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}

.cc-overlay-primary {
  background-color: var(--primary-0);
}

.cc-overlay-success {
  background-color: var(--success-0);
}

.cc-overlay-error {
  background-color: var(--error-0);
}

.cc-overlay-warning {
  background-color: var(--warning-0);
}

.cc-overlay-accent {
  background-color: var(--accent-0);
}`,l=`export interface OverlayProps {
  open?: boolean
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  opacity?: number
  closeOnClick?: boolean
  class?: string
  style?: CSSProperties
}
export const Overlay = component$<OverlayProps>(
  ({
    class: className,
    style = {
      height: '100%',
      width: '100%',
      position: 'fixed',
      display: 'flex',
      inset: 0,
      zIndex: 99999,
    },
    open = false,
    color = 'primary',
    opacity = 0.5,
    closeOnClick = true,
  }) => {
    const isOpen = useSignal(false)

    return (
      <div
        class={className}
        style={isOpen.value != open ? style : { width: 0, height: 0 }}
        onClick$={$(() => closeOnClick && (isOpen.value = !isOpen.value))}
      >
        {isOpen.value != open && (
          <div
            class={\`cc-overlay cc-overlay-\${color}\`}
            style={{ opacity: opacity }}
          />
        )}
        {isOpen.value != open && <Slot />}
      </div>
    )
  }
)`,n=e(r(()=>o(()=>import("./q-B5Ja8r1y.js"),[]),"s_Ouvbu2JziWE"));export{s as _auto_cssCode,l as _auto_tsCode,n as default};
