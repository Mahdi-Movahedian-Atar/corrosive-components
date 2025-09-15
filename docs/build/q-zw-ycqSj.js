import{_ as r}from "./q-DXM0pR1l.js";import{H as e,q as i}from "./q-8bdPC3mX.js";const d=`.cc-divider {
  border: solid var(--width);
  border-radius: var(--corner);
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
}

.cc-divider-vertical {
  flex-direction: column;
}

.cc-divider-primary {
  background: var(--primary-0);
  border-color: var(--primary-0);
  color: var(--primary-0);
}

.cc-divider-success {
  background: var(--success-0);
  border-color: var(--success-0);
  color: var(--success-0);
}

.cc-divider-error {
  background: var(--error-0);
  border-color: var(--error-0);
  color: var(--error-0);
}

.cc-divider-warning {
  background: var(--warning-0);
  border-color: var(--warning-0);
  color: var(--warning-0);
}

.cc-divider-accent {
  background: var(--accent-0);
  border-color: var(--accent-0);
  color: var(--accent-0);
}

.cc-divider-solid {
  color: var(--secondary-0);
}

.cc-divider-outlined {
  background: unset;
}

.cc-divider-text {
  background: unset;
  border: unset;
}

.cc-divider-panel:first-child {
  border-right: double currentColor var(--width);
}
.cc-divider-panel:last-child {
  border-left: double currentColor var(--width);
}
.cc-divider-vertical > .cc-divider-panel:first-child {
  border-right: none;
  border-bottom: double currentColor var(--width);
}
.cc-divider-vertical > .cc-divider-panel:last-child {
  border-left: none;
  border-top: double currentColor var(--width);
}`,a=`export interface DividerProps {
  vertical?: boolean
  offset?: number
  class?: string
  style?: CSSProperties
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  variant?: 'solid' | 'outlined' | 'text'
}

export const Divider = component$<DividerProps>(
  ({
    vertical = false,
    offset = 50,
    class: className = undefined,
    style,
    variant = 'outlined',
    color = 'primary',
  }) => {
    return (
      <div style={style} class={className}>
        <div
          class={\`cc-divider \${vertical && 'cc-divider-vertical'} cc-divider-\${color} cc-divider-\${variant}\`}
        >
          <div
            style={\`\${vertical ? 'height' : 'width'} : \${offset}%\`}
            class={\`cc-divider-panel\`}
          >
            <Slot name="firstPanel" />
          </div>
          <div
            style={\`\${vertical ? 'height' : 'width'} : \${100 - offset}%\`}
            class={'cc-divider-panel'}
          >
            <Slot name="secondPanel" />
          </div>
        </div>
      </div>
    )
  }
)`,t=e(i(()=>r(()=>import("./q-Bkc1IN36.js"),[]),"s_S5IrewikefY"));export{d as _auto_cssCode,a as _auto_tsCode,t as default};
