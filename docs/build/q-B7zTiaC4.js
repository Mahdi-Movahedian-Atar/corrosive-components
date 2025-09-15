import{_ as e}from"./q-uemlvruI.js";import{H as r,q as c}from"./q-8bdPC3mX.js";const t=`.cc-toggle-checkbox,
.cc-toggle-radio,
.cc-toggle-slider {
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}

.cc-toggle-primary span,
.cc-toggle-primary input:checked + span:after {
  background: var(--secondary-0);
  border: var(--primary-0);
}
.cc-toggle-primary:hover span:after,
.cc-toggle-primary:hover input:checked + span {
  background: var(--secondary-1);
  border: var(--primary-2);
}
.cc-toggle-primary:hover span,
.cc-toggle-primary:hover input:checked + span:after {
  background: var(--primary-2);
  border: var(--secondary-1);
}
.cc-toggle-primary span:after,
.cc-toggle-primary input:checked + span {
  background: var(--primary-0);
  border: var(--secondary-0);
}
.cc-toggle-success span,
.cc-toggle-success input:checked + span:after {
  background: var(--success-0);
  border: var(--success-2);
}
.cc-toggle-success:hover span:after,
.cc-toggle-success:hover input:checked + span {
  background: var(--success-1);
  border: var(--success-2);
}
.cc-toggle-success:hover span,
.cc-toggle-success:hover input:checked + span:after {
  background: var(--success-2);
  border: var(--success-1);
}
.cc-toggle-success span:after,
.cc-toggle-success input:checked + span {
  background: var(--success-2);
  border: var(--success-0);
}
.cc-toggle-error span,
.cc-toggle-error input:checked + span:after {
  background: var(--error-0);
  border: var(--error-2);
}
.cc-toggle-error:hover span:after,
.cc-toggle-error:hover input:checked + span {
  background: var(--error-1);
  border: var(--error-2);
}
.cc-toggle-error:hover span,
.cc-toggle-error:hover input:checked + span:after {
  background: var(--error-2);
  border: var(--error-1);
}
.cc-toggle-error span:after,
.cc-toggle-error input:checked + span {
  background: var(--error-2);
  border: var(--error-0);
}
.cc-toggle-warning span,
.cc-toggle-warning input:checked + span:after {
  background: var(--warning-0);
  border: var(--warning-2);
}
.cc-toggle-warning:hover span:after,
.cc-toggle-warning:hover input:checked + span {
  background: var(--warning-1);
  border: var(--warning-2);
}
.cc-toggle-warning:hover span,
.cc-toggle-warning:hover input:checked + span:after {
  background: var(--warning-2);
  border: var(--warning-1);
}
.cc-toggle-warning span:after,
.cc-toggle-warning input:checked + span {
  background: var(--warning-2);
  border: var(--warning-0);
}
.cc-toggle-accent span,
.cc-toggle-accent input:checked + span:after {
  background: var(--accent-0);
  border: var(--accent-2);
}
.cc-toggle-accent:hover span:after,
.cc-toggle-accent:hover input:checked + span {
  background: var(--accent-1);
  border: var(--accent-2);
}
.cc-toggle-accent:hover span,
.cc-toggle-accent:hover input:checked + span:after {
  background: var(--accent-2);
  border: var(--accent-1);
}
.cc-toggle-accent span:after,
.cc-toggle-accent input:checked + span {
  background: var(--accent-2);
  border: var(--accent-0);
}
.cc-toggle-disabled span,
.cc-toggle-disabled input:checked + span:after {
  background: var(--tertiary-1);
  border: var(--tertiary-2);
}
.cc-toggle-disabled span:after,
.cc-toggle-disabled input:checked + span {
  background: var(--tertiary-2);
  border: var(--tertiary-1);
}

.cc-toggle-radio {
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.cc-toggle-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.cc-toggle-radio span,
.cc-toggle-radio:hover span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-width: var(--width);
  border-style: solid;
}

.cc-toggle-radio span:after,
.cc-toggle-radio:hover span:after {
  content: '';
  position: absolute;
  display: none;
}

.cc-toggle-radio input:checked ~ span:after {
  display: block;
}

.cc-toggle-radio span:after {
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  border-radius: 50%;
}

.cc-toggle-checkbox {
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.cc-toggle-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.cc-toggle-checkbox span,
.cc-toggle-checkbox:hover span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-width: var(--width);
  border-style: solid;
  border-radius: var(--corner);
}

.cc-toggle-checkbox span:after {
  content: '';
  position: absolute;
  display: none;
}

.cc-toggle-checkbox input:checked ~ span:after {
  display: inline-block;
  mask-size: cover;
}

.cc-toggle-checkbox span:after {
  margin: 10%;
  width: 80%;
  height: 80%;
  mask: url('../icons/Check.svg');
}

.cc-toggle-slider {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.cc-toggle-slider input {
  opacity: 0;
  width: 0;
  height: 0;
  overflow: visible;
}

.cc-toggle-slider span,
.cc-toggle-slider:hover span,
.cc-toggle-slider input:checked + span,
.cc-toggle-slider:hover input:checked + span {
  position: absolute;
  cursor: pointer;
  top: 25%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
  border-width: var(--width);
  border-style: solid;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 100vmax;
}

.cc-toggle-slider span:after,
.cc-toggle-slider:hover span:after {
  position: absolute;
  content: '';
  height: 200%;
  width: 50%;
  transform: translateY(-25%);
  -webkit-transform: translateY(-25%);
  -ms-transform: translateY(-25%);
  left: calc(-1 * var(--width));
  top: 0%;
  border-width: var(--width);
  border-style: solid;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 100vmax;
}

.cc-toggle-slider input:checked + span:after,
.cc-toggle-slider:hover input:checked + span:after {
  border-width: var(--width);
  border-style: solid;
  left: calc(1 * var(--width));
  -webkit-transform: translate(100%, -25%);
  -ms-transform: translate(100%, -25%);
  transform: translate(100%, -25%);
}`,n=`export interface ToggleProps {
  class?: string
  value?: boolean
  disabled?: boolean
  style?: CSSProperties
  variant?: 'slider' | 'radio' | 'checkbox'
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  size?: number
  sizeType?: 'rem' | 'rm' | 'px' | string
  onChange?: QRL<(value: boolean) => void>
}

export const Toggle = component$<ToggleProps>(
  ({
    disabled,
    class: className,
    style,
    size = 2,
    sizeType = 'rem',
    variant = 'slider',
    color = 'primary',
    onChange,
    value,
  }) => {
    const v = useSignal<undefined | boolean>(undefined)

    return (
      <div style={style} class={className}>
        <div
          class={\`cc-toggle-\${variant} cc-toggle-\${disabled ? 'disabled' : color}\`}
          style={{
            height: \`\${size}\` + sizeType,
            width: \`\${variant == 'slider' ? size * 2 : size}\` + sizeType,
          }}
        >
          <input
            style={{ height: '100%', width: '100%' }}
            type={variant == 'slider' ? 'radio' : variant}
            onChange$={$(() => {
              v.value = v.value === undefined ? !value : !v.value
              onChange && onChange(v.value)
            })}
            checked={v.value === undefined ? value : v.value}
            disabled={disabled}
          />
          <span
            onClick$={$(() => {
              if (disabled) {
                return
              }
              v.value = v.value === undefined ? !value : !v.value
              onChange && onChange(v.value)
            })}
          ></span>
        </div>
      </div>
    )
  }
)`,s=r(c(()=>e(()=>import("./q-DmWK6qJk.js"),[]),"s_owFWn3uoo00"));export{t as _auto_cssCode,n as _auto_tsCode,s as default};
