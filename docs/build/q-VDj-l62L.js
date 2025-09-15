import{_ as r}from"./q-uemlvruI.js";import{H as o,q as a}from"./q-8bdPC3mX.js";const t=`.cc-button {
  border-radius: var(--corner);
  cursor: pointer;
  position: relative;
}

.cc-button-rounded {
  border-radius: 100vmax;
  cursor: pointer;
}

.cc-button-raised {
  box-shadow: 0 var(--width) var(--width) var(--secondary-2);
}

.cc-button-primary {
  background: var(--primary-0);
  border: var(--primary-0);
  color: var(--primary-0);
}

.cc-button-primary:hover {
  background: var(--primary-2);
  border: var(--primary-2);
  color: var(--primary-2);
}

.cc-button-primary:active {
  background: var(--tertiary-2);
  border: var(--tertiary-2);
  color: var(--tertiary-2);
}

.cc-button-success {
  background: var(--success-0);
  border: var(--success-0);
  color: var(--success-0);
}

.cc-button-success:hover {
  background: var(--success-1);
  border: var(--success-1);
  color: var(--success-1);
}

.cc-button-success:active {
  background: var(--success-2);
  border: var(--success-2);
  color: var(--success-2);
}

.cc-button-error {
  background: var(--error-0);
  border: var(--error-0);
  color: var(--error-0);
}

.cc-button-error:hover {
  background: var(--error-1);
  border: var(--error-1);
  color: var(--error-1);
}

.cc-button-error:active {
  background: var(--error-2);
  border: var(--error-2);
  color: var(--error-2);
}

.cc-button-warning {
  background: var(--warning-0);
  border: var(--warning-0);
  color: var(--warning-0);
}

.cc-button-warning:hover {
  background: var(--warning-1);
  border: var(--warning-1);
  color: var(--warning-1);
}

.cc-button-warning:active {
  background: var(--warning-2);
  border: var(--warning-2);
  color: var(--warning-2);
}

.cc-button-accent {
  background: var(--accent-0);
  border: var(--accent-0);
  color: var(--accent-0);
}

.cc-button-accent:hover {
  background: var(--accent-1);
  border: var(--accent-1);
  color: var(--accent-1);
}

.cc-button-accent:active {
  background: var(--accent-2);
  border: var(--accent-2);
  color: var(--accent-2);
}

.cc-button-disabled {
  background: var(--tertiary-0);
  border: var(--tertiary-0);
  color: var(--tertiary-0);
  cursor: auto;
}

.cc-button-solid,
.cc-button-solid:hover,
.cc-button-solid:active {
  border-style: solid;
  border-width: var(--width);
  color: var(--secondary-0);
}

.cc-button-text,
.cc-button-text:hover,
.cc-button-text:active {
  border: unset;
  background: unset;
}

.cc-button-outlined,
.cc-button-outlined:hover,
.cc-button-outlined:active {
  border-style: solid;
  border-width: var(--width);
  background: unset;
}`,n=`export interface ToggleButtonProps {
  value?: boolean
  class?: string
  disabled?: boolean
  style?: CSSProperties
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  rounded?: boolean
  onChange?: QRL<(value: boolean) => void>
  raised?: boolean
}

export const ToggleButton = component$<ToggleButtonProps>(
  ({
    value = false,
    disabled,
    class: className,
    style,
    color = 'primary',
    rounded = false,
    onChange,
    raised,
  }) => {
    const v = useSignal<undefined | boolean>(undefined)

    return (
      <div class={className} style={style}>
        <button
          style={{ height: '100%', width: '100%' }}
          class={\`cc-button-\${(v.value == undefined && value) || v.value ? 'solid' : 'outlined'} cc-button-\${disabled ? 'disabled' : color} \${rounded ? 'cc-button-rounded' : 'cc-button'} \${raised && 'cc-button-raised'}\`}
          disabled={disabled}
          onClick$={$(() => {
            v.value = v.value == undefined ? !value : !v.value
            onChange && onChange(v.value)
          })}
        >
          <Slot />
        </button>
      </div>
    )
  }
)`,s=o(a(()=>r(()=>import("./q-GDPDsAY-.js"),[]),"s_oFULmrPb6tQ"));export{t as _auto_cssCode,n as _auto_tsCode,s as default};
