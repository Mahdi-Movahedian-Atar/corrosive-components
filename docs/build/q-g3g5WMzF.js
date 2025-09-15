import{_ as e}from "./q-DXM0pR1l.js";import{H as r,q as a}from "./q-8bdPC3mX.js";const o=`.cc-textarea textarea,
.cc-textarea-rounded textarea {
  background: unset;
  border: unset;
  outline: unset;
  color: inherit;
  flex: auto;
  width: 100%;
  height: 100%;
  scrollbar-color: currentColor var(--secondary-0);
  scrollbar-arrow-color: currentColor;
  scrollbar-gutter: both-edges;
}

.cc-textarea,
.cc-textarea-rounded {
  position: relative;
  cursor: text;
  padding: 0.5rem;
  font-size: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.cc-textarea {
  border-radius: var(--corner);
}

.cc-textarea-rounded {
  border-radius: 100vmax;
}

.cc-textarea-raised {
  box-shadow: 0 var(--width) var(--width) var(--secondary-2);
}

.cc-textarea-primary {
  background: var(--primary-0);
  border: var(--primary-0);
  color: var(--primary-0);
}
.cc-textarea-primary textarea::placeholder {
  color: var(--tertiary-1);
}
.cc-textarea-primary:hover,
.cc-textarea-solid.cc-textarea-primary:hover ~ .cc-textarea-label {
  background: var(--primary-2);
  border: var(--primary-2);
}
.cc-textarea-primary:active,
.cc-textarea-solid.cc-textarea-primary:active ~ .cc-textarea-label {
  background: var(--tertiary-2);
  border: var(--tertiary-2);
}

.cc-textarea-success {
  background: var(--success-0);
  border: var(--success-0);
  color: var(--success-0);
}
.cc-textarea-success textarea::placeholder {
  color: var(--success-1);
}
.cc-textarea-success:hover,
.cc-textarea-solid.cc-textarea-success:hover ~ .cc-textarea-label {
  background: var(--success-1);
  border: var(--success-1);
}
.cc-textarea-success:active,
.cc-textarea-solid.cc-textarea-success:active ~ .cc-textarea-label {
  background: var(--success-2);
  border: var(--success-2);
}

.cc-textarea-error {
  background: var(--error-0);
  border: var(--error-0);
  color: var(--error-0);
}
.cc-textarea-error textarea::placeholder {
  color: var(--error-1);
}
.cc-textarea-error:hover,
.cc-textarea-solid.cc-textarea-error:hover ~ .cc-textarea-label {
  background: var(--error-1);
  border: var(--error-1);
}
.cc-textarea-error:active,
.cc-textarea-solid.cc-textarea-error:active ~ .cc-textarea-label {
  background: var(--error-2);
  border: var(--error-2);
}

.cc-textarea-warning {
  background: var(--warning-0);
  border: var(--warning-0);
  color: var(--warning-0);
}
.cc-textarea-warning textarea::placeholder {
  color: var(--warning-1);
}
.cc-textarea-warning:hover,
.cc-textarea-solid.cc-textarea-warning:hover ~ .cc-textarea-label {
  background: var(--warning-1);
  border: var(--warning-1);
}
.cc-textarea-warning:active,
.cc-textarea-solid.cc-textarea-warning:active ~ .cc-textarea-label {
  background: var(--warning-2);
  border: var(--warning-2);
}

.cc-textarea-accent {
  background: var(--accent-0);
  border: var(--accent-0);
  color: var(--accent-0);
}
.cc-textarea-accent textarea::placeholder {
  color: var(--accent-1);
}
.cc-textarea-accent:hover,
.cc-textarea-solid.cc-textarea-accent:hover ~ .cc-textarea-label {
  background: var(--accent-1);
  border: var(--accent-1);
}
.cc-textarea-accent:active,
.cc-textarea-solid.cc-textarea-accent:active ~ .cc-textarea-label {
  background: var(--accent-2);
  border: var(--accent-2);
}

.cc-textarea-disabled {
  background: var(--tertiary-0);
  border: var(--tertiary-0);
  color: var(--tertiary-2);
  cursor: auto;
}
.cc-textarea-disabled textarea::placeholder {
  color: var(--tertiary-2);
}
.cc-textarea-solid,
.cc-textarea-solid:hover,
.cc-textarea-solid:active,
.cc-textarea-solid:focus-visible {
  border-style: solid;
  outline: none;
  border-width: var(--width);
  color: var(--secondary-0);
}
.cc-textarea-solid textarea::placeholder {
  color: var(--secondary-0);
}

.cc-textarea-solid textarea {
  scrollbar-color: currentColor var(--primary-0);
  scrollbar-arrow-color: var(--primary-0);
}

.cc-textarea-text,
.cc-textarea-text:hover,
.cc-textarea-text:active,
.cc-textarea-text:focus-visible {
  border: unset;
  outline: none;
  border-bottom: var(--width) solid;
  background: unset;
}

.cc-textarea-outlined,
.cc-textarea-outlined:hover,
.cc-textarea-outlined:active,
.cc-textarea-outlined:focus-visible {
  border-style: solid;
  outline: none;
  border-width: var(--width);
  background: unset;
}

.cc-textarea-label {
  position: absolute;
  pointer-events: none;
  width: fit-content;
  height: min-content;
  top: 0;
  border-radius: var(--corner);
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.cc-textarea-outlined .cc-textarea-label,
.cc-textarea-text .cc-textarea-label {
  background: unset;
  border: unset;
}

textarea:placeholder-shown ~ .cc-textarea-label {
  background: none;
  font-size: 0;
  border-style: none;
}

.cc-textarea-outlined textarea:not(:placeholder-shown) ~ .cc-textarea-label,
.cc-textarea-text textarea:not(:placeholder-shown) ~ .cc-textarea-label {
  top: -1rem;
  border: solid var(--width);
  background: var(--secondary-0);
  display: inline-block;
}
.cc-textarea-solid .cc-textarea-label,
.cc-textarea-solid textarea:not(:placeholder-shown) ~ .cc-textarea-label {
  color: var(--secondary-0);
}
.cc-textarea-solid textarea:not(:placeholder-shown) ~ .cc-textarea-label {
  top: -1rem;
  border: solid var(--width) var(--secondary-0);
  display: inline-block;
}`,l=`export interface TextAreaProps {
  value?: string;
  class?: string;
  disabled?: boolean;
  cols?: number;
  rows?: number;
  resize?: "horizontal" | "vertical" | "both" | "none";
  maxLength?: number;
  style?: CSSProperties;
  color?: "success" | "error" | "warning" | "accent" | "primary";
  variant?: "solid" | "outlined" | "text";
  rounded?: boolean;
  onChange?: QRL<(value: string | undefined) => void>;
  raised?: boolean;
  placeholder?: string;
  floatingPlaceholder?: boolean;
}

export const TextArea = component$<TextAreaProps>(
  ({
    value,
    disabled,
    class: className,
    style,
    cols = 20,
    rows = 2,
    resize = "both",
    maxLength = undefined,
    variant = "outlined",
    color = "primary",
    rounded = false,
    onChange,
    raised,
    placeholder,
    floatingPlaceholder = true,
  }) => {
    const v = useSignal<undefined | string>(undefined);

    return (
      <div class={className} style={style}>
        <spam
          class={\`cc-textarea-\${variant} cc-textarea-\${disabled ? "disabled" : color} \${rounded ? "cc-textarea-rounded" : "cc-textarea"} \${raised && "cc-textarea-raised"}\`}
        >
          <Slot name={"left"} />
          <textarea
            style={{ resize }}
            disabled={disabled}
            onChange$={$((e) => {
              v.value = (e.target as any).value;

              onChange && onChange(v.value);
            })}
            placeholder={placeholder}
            cols={cols}
            rows={rows}
            maxLength={maxLength}
            value={v.value ? v.value : value}
          />
          <Slot name={"right"} />
          {floatingPlaceholder && placeholder && (
            <label
              class={\`cc-textarea-label cc-textarea-\${disabled ? "disabled" : color}\`}
            >
              {placeholder}
            </label>
          )}
        </spam>
      </div>
    );
  },
);`,n=r(a(()=>e(()=>import("./q-CMx1QOTV.js"),[]),"s_WMRoSjeu3mA"));export{o as _auto_cssCode,l as _auto_tsCode,n as default};
