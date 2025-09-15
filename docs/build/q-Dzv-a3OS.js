import{_ as e}from"./q-uemlvruI.js";import{H as r,q as c}from"./q-8bdPC3mX.js";const n=`.cc-fileInput,
.cc-fileInput-rounded {
  position: relative;
  cursor: text;
  padding: 0.5rem;
  font-size: inherit;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
}

.cc-fileInput input::file-selector-button,
.cc-fileInput-rounded input::file-selector-button {
  background: none;
  border: currentColor var(--width) solid;
  border-radius: var(--corner);
  color: currentColor;
  height: 100%;
  font-size: medium;
}

.cc-fileInput input,
.cc-fileInput-rounded input {
  width: 100%;
  height: 100%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.cc-fileInput {
  border-radius: var(--corner);
}

.cc-fileInput-rounded {
  border-radius: 100vmax;
}

.cc-fileInput-raised {
  box-shadow: 0 var(--width) var(--width) var(--secondary-2);
}

.cc-fileInput-primary {
  background: var(--primary-0);
  border: var(--primary-0);
  color: var(--primary-0);
}
.cc-fileInput-primary:hover,
.cc-fileInput-solid.cc-fileInput-primary:hover ~ .cc-fileInput-label {
  background: var(--primary-2);
  border: var(--primary-2);
}
.cc-fileInput-primary:active,
.cc-fileInput-solid.cc-fileInput-primary:active ~ .cc-fileInput-label {
  background: var(--tertiary-2);
  border: var(--tertiary-2);
}

.cc-fileInput-success {
  background: var(--success-0);
  border: var(--success-0);
  color: var(--success-0);
}
.cc-fileInput-success:hover,
.cc-fileInput-solid.cc-fileInput-success:hover ~ .cc-fileInput-label {
  background: var(--success-1);
  border: var(--success-1);
}
.cc-fileInput-success:active,
.cc-fileInput-solid.cc-fileInput-success:active ~ .cc-fileInput-label {
  background: var(--success-2);
  border: var(--success-2);
}

.cc-fileInput-error {
  background: var(--error-0);
  border: var(--error-0);
  color: var(--error-0);
}
.cc-fileInput-error:hover,
.cc-fileInput-solid.cc-fileInput-error:hover ~ .cc-fileInput-label {
  background: var(--error-1);
  border: var(--error-1);
}
.cc-fileInput-error:active,
.cc-fileInput-solid.cc-fileInput-error:active ~ .cc-fileInput-label {
  background: var(--error-2);
  border: var(--error-2);
}

.cc-fileInput-warning {
  background: var(--warning-0);
  border: var(--warning-0);
  color: var(--warning-0);
}
.cc-fileInput-warning:hover,
.cc-fileInput-solid.cc-fileInput-warning:hover ~ .cc-fileInput-label {
  background: var(--warning-1);
  border: var(--warning-1);
}
.cc-fileInput-warning:active,
.cc-fileInput-solid.cc-fileInput-warning:active ~ .cc-fileInput-label {
  background: var(--warning-2);
  border: var(--warning-2);
}

.cc-fileInput-accent {
  background: var(--accent-0);
  border: var(--accent-0);
  color: var(--accent-0);
}
.cc-fileInput-accent:hover,
.cc-fileInput-solid.cc-fileInput-accent:hover ~ .cc-fileInput-label {
  background: var(--accent-1);
  border: var(--accent-1);
}
.cc-fileInput-accent:active,
.cc-fileInput-solid.cc-fileInput-accent:active ~ .cc-fileInput-label {
  background: var(--accent-2);
  border: var(--accent-2);
}

.cc-fileInput-disabled {
  background: var(--tertiary-0);
  border: var(--tertiary-0);
  color: var(--tertiary-2);
  cursor: auto;
}

.cc-fileInput-solid,
.cc-fileInput-solid:hover,
.cc-fileInput-solid:active,
.cc-fileInput-solid:focus-visible {
  border-style: solid;
  outline: none;
  border-width: var(--width);
  color: var(--secondary-0);
}

.cc-fileInput-text,
.cc-fileInput-text:hover,
.cc-fileInput-text:active,
.cc-fileInput-text:focus-visible {
  border: unset;
  outline: none;
  border-bottom: var(--width) solid;
  background: unset;
}

.cc-fileInput-outlined,
.cc-fileInput-outlined:hover,
.cc-fileInput-outlined:active,
.cc-fileInput-outlined:focus-visible {
  border-style: solid;
  outline: none;
  border-width: var(--width);
  background: unset;
}

.cc-fileInput-label {
  position: absolute;
  pointer-events: none;
  width: fit-content;
  height: min-content;
  bottom: 50%;
  top: -1rem;
  border-radius: var(--corner);
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.cc-fileInput-outlined .cc-fileInput-label,
.cc-fileInput-text .cc-fileInput-label {
  background: unset;
  border: unset;
}

.cc-fileInput-outlined .cc-fileInput-label,
.cc-fileInput-text .cc-fileInput-label {
  border: solid var(--width);
  background: var(--secondary-0);
  display: inline-block;
}
.cc-fileInput-solid .cc-fileInput-label {
  color: var(--secondary-0);
  border: solid var(--width) var(--secondary-0);
  display: inline-block;
}`,l=`export interface FileInputProps {
  class?: string;
  disabled?: boolean;
  multiple?: boolean;
  accept?: string;
  style?: CSSProperties;
  color?: "success" | "error" | "warning" | "accent" | "primary";
  variant?: "solid" | "outlined" | "text";
  rounded?: boolean;
  onChange?: QRL<(value: FileList | undefined) => void>;
  raised?: boolean;
  placeholder?: string;
}
export const FileInput = component$<FileInputProps>(
  ({
    disabled,
    class: className,
    multiple = false,
    accept,
    style,
    variant = "outlined",
    color = "primary",
    rounded = false,
    onChange,
    raised,
    placeholder,
  }) => {
    return (
      <div class={className} style={style}>
        <spam
          class={\`cc-fileInput-\${variant} cc-fileInput-\${disabled ? "disabled" : color} \${rounded ? "cc-fileInput-rounded" : "cc-fileInput"} \${raised && "cc-fileInput-raised"}\`}
        >
          <Slot name={"left"} />
          <input
            id={"file"}
            disabled={disabled}
            onChange$={$((e) => {
              const files = (e.target as HTMLInputElement).files;

              let value;

              if (files == null) value = undefined;
              else value = files;

              onChange && onChange(value);
            })}
            type={"file"}
            multiple={multiple}
            accept={accept}
          />
          <Slot name={"right"} />
          {placeholder && (
            <label
              class={\`cc-fileInput-label cc-fileInput-\${disabled ? "disabled" : color}\`}
            >
              {placeholder}
            </label>
          )}
        </spam>
      </div>
    );
  },
);`,a=r(c(()=>e(()=>import("./q-CW9QrfbO.js"),[]),"s_fzcA0wYPS14"));export{n as _auto_cssCode,l as _auto_tsCode,a as default};
