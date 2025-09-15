import{_ as r}from"./q-uemlvruI.js";import{H as c,q as e}from"./q-8bdPC3mX.js";const t=`.cc-input input,
.cc-input-rounded input {
  background: unset;
  border: unset;
  outline: unset;
  color: inherit;
  flex: auto;
  width: 100%;
}

.cc-input,
.cc-input-rounded {
  position: relative;
  cursor: text;
  padding: 0.5rem;
  font-size: inherit;
  width: 100%;
  height: 100%;
  display: flex;
}

.cc-input {
  border-radius: var(--corner);
}

.cc-input-rounded {
  border-radius: 100vmax;
}

.cc-input-raised {
  box-shadow: 0 var(--width) var(--width) var(--secondary-2);
}

.cc-input-primary {
  background: var(--primary-0);
  border: var(--primary-0);
  color: var(--primary-0);
}
.cc-input-primary input::placeholder {
  color: var(--tertiary-1);
}
.cc-input-primary:hover,
.cc-input-solid.cc-input-primary:hover ~ .cc-input-label {
  background: var(--primary-2);
  border: var(--primary-2);
}
.cc-input-primary:active,
.cc-input-solid.cc-input-primary:active ~ .cc-input-label {
  background: var(--tertiary-2);
  border: var(--tertiary-2);
}

.cc-input-success {
  background: var(--success-0);
  border: var(--success-0);
  color: var(--success-0);
}
.cc-input-success input::placeholder {
  color: var(--success-1);
}
.cc-input-success:hover,
.cc-input-solid.cc-input-success:hover ~ .cc-input-label {
  background: var(--success-1);
  border: var(--success-1);
}
.cc-input-success:active,
.cc-input-solid.cc-input-success:active ~ .cc-input-label {
  background: var(--success-2);
  border: var(--success-2);
}

.cc-input-error {
  background: var(--error-0);
  border: var(--error-0);
  color: var(--error-0);
}
.cc-input-error input::placeholder {
  color: var(--error-1);
}
.cc-input-error:hover,
.cc-input-solid.cc-input-error:hover ~ .cc-input-label {
  background: var(--error-1);
  border: var(--error-1);
}
.cc-input-error:active,
.cc-input-solid.cc-input-error:active ~ .cc-input-label {
  background: var(--error-2);
  border: var(--error-2);
}

.cc-input-warning {
  background: var(--warning-0);
  border: var(--warning-0);
  color: var(--warning-0);
}
.cc-input-warning input::placeholder {
  color: var(--warning-1);
}
.cc-input-warning:hover,
.cc-input-solid.cc-input-warning:hover ~ .cc-input-label {
  background: var(--warning-1);
  border: var(--warning-1);
}
.cc-input-warning:active,
.cc-input-solid.cc-input-warning:active ~ .cc-input-label {
  background: var(--warning-2);
  border: var(--warning-2);
}

.cc-input-accent {
  background: var(--accent-0);
  border: var(--accent-0);
  color: var(--accent-0);
}
.cc-input-accent input::placeholder {
  color: var(--accent-1);
}
.cc-input-accent:hover,
.cc-input-solid.cc-input-accent:hover ~ .cc-input-label {
  background: var(--accent-1);
  border: var(--accent-1);
}
.cc-input-accent:active,
.cc-input-solid.cc-input-accent:active ~ .cc-input-label {
  background: var(--accent-2);
  border: var(--accent-2);
}

.cc-input-disabled {
  background: var(--tertiary-0);
  border: var(--tertiary-0);
  color: var(--tertiary-2);
  cursor: auto;
}
.cc-input-disabled input::placeholder {
  color: var(--tertiary-2);
}
.cc-input-solid,
.cc-input-solid:hover,
.cc-input-solid:active,
.cc-input-solid:focus-visible {
  border-style: solid;
  outline: none;
  border-width: var(--width);
  color: var(--secondary-0);
}
.cc-input-solid input::placeholder {
  color: var(--secondary-0);
}

.cc-input-text,
.cc-input-text:hover,
.cc-input-text:active,
.cc-input-text:focus-visible {
  border: unset;
  outline: none;
  border-bottom: var(--width) solid;
  background: unset;
}

.cc-input-outlined,
.cc-input-outlined:hover,
.cc-input-outlined:active,
.cc-input-outlined:focus-visible {
  border-style: solid;
  outline: none;
  border-width: var(--width);
  background: unset;
}

.cc-input-label {
  position: absolute;
  pointer-events: none;
  width: fit-content;
  height: min-content;
  top: 0;
  border-radius: var(--corner);
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.cc-input-outlined .cc-input-label,
.cc-input-text .cc-input-label {
  background: unset;
  border: unset;
}

input:placeholder-shown ~ .cc-input-label {
  background: none;
  font-size: 0;
  border-style: none;
}

.cc-input-outlined input:not(:placeholder-shown) ~ .cc-input-label,
.cc-input-text input:not(:placeholder-shown) ~ .cc-input-label {
  top: -1rem;
  border: solid var(--width);
  background: var(--secondary-0);
  display: inline-block;
}
.cc-input-solid .cc-input-label,
.cc-input-solid input:not(:placeholder-shown) ~ .cc-input-label {
  color: var(--secondary-0);
}
.cc-input-solid input:not(:placeholder-shown) ~ .cc-input-label {
  top: -1rem;
  border: solid var(--width) var(--secondary-0);
  display: inline-block;
}`,i=`export interface InputProps {
  value?: number | string;
  class?: string;
  disabled?: boolean;
  style?: CSSProperties;
  color?: "success" | "error" | "warning" | "accent" | "primary";
  variant?: "solid" | "outlined" | "text";
  rounded?: boolean;
  onChange?: QRL<(value: number | string | undefined) => void>;
  raised?: boolean;
  placeholder?: string;
  floatingPlaceholder?: boolean;
  type?:
    | "text"
    | "number"
    | "password"
    | "color"
    | "date"
    | HTMLInputTypeAttribute;
  min?: number;
  max?: number;
}

export const Input = component$<InputProps>(
  ({
    value,
    disabled,
    class: className,
    style,
    variant = "outlined",
    color = "primary",
    rounded = false,
    onChange,
    raised,
    placeholder,
    floatingPlaceholder = true,
    type,
    min = Number.MIN_VALUE,
    max = Number.MAX_VALUE,
  }) => {
    const v = useSignal<number | string | undefined>(undefined);

    return (
      <div class={className} style={style}>
        <spam
          class={\`cc-input-\${variant} cc-input-\${disabled ? "disabled" : color} \${rounded ? "cc-input-rounded" : "cc-input"} \${raised && "cc-input-raised"}\`}
        >
          <Slot name={"left"} />
          <input
            disabled={disabled}
            onChange$={$((e) => {
              v.value = (e.target as any).value;
              if (type == "number") {
                v.value = parseFloat((e.target as any).value);
                v.value < min && (v.value = min);
                v.value > max && (v.value = max);
              }

              onChange && onChange(v.value);
            })}
            placeholder={placeholder}
            type={type}
            value={v.value == undefined ? value : v.value}
          />
          <Slot name={"right"} />
          {floatingPlaceholder && placeholder && (
            <label
              class={\`cc-input-label cc-input-\${disabled ? "disabled" : color}\`}
            >
              {placeholder}
            </label>
          )}
        </spam>
      </div>
    );
  },
);`,o=c(e(()=>r(()=>import("./q-B-z1YkUK.js"),[]),"s_0wBY8xTzxHs"));export{t as _auto_cssCode,i as _auto_tsCode,o as default};
