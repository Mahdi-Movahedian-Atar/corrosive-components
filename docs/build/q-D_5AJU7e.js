import{_ as e}from "./q-DXM0pR1l.js";import{H as c,q as t}from "./q-8bdPC3mX.js";const l=`.cc-select span,
.cc-select-rounded span {
  background: unset;
  border: unset;
  outline: unset;
  color: inherit;
  flex: auto;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  display: flex;
}

.cc-select span label,
.cc-select-rounded span label {
  flex: 1;
  cursor: pointer;
}
.cc-select span i,
.cc-select-rounded span i {
  align-self: center;
  margin: var(--width);
}

.cc-select,
.cc-select-rounded {
  position: relative;
  cursor: text;
  padding: 0.5rem;
  font-size: inherit;
  width: 100%;
  height: 100%;
  display: flex;
}

.cc-select {
  border-radius: var(--corner);
}

.cc-select-rounded {
  border-radius: 100vmax;
}

.cc-select-raised {
  box-shadow: 0 var(--width) var(--width) var(--secondary-2);
}

.cc-select-items {
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  left: 0%;
  right: 0%;
  z-index: 99;
  border-radius: var(--corner);
  border: var(--width) solid;
  cursor: pointer;
  scrollbar-width: thin;
  scrollbar-color: currentColor var(--secondary-0);
  scrollbar-arrow-color: currentColor;
  scrollbar-gutter: both-edges;
}

.cc-select-items div {
  padding: var(--width);
  border: unset;
  border-bottom: var(--width) solid;
}

.cc-select-items div:last-child {
  border-bottom: unset;
}

.cc-select-items span {
  margin: var(--width);
  padding-top: 1rem;
  font-size: large;
}

.cc-select-items span:first-child {
  margin: var(--width);
  padding-top: 0;
  font-size: large;
}

.cc-select-primary,
.cc-select-primary .cc-select-items {
  background: var(--primary-0);
  border: var(--primary-0);
  color: var(--primary-0);
}
.cc-select-primary:hover,
.cc-select-solid.cc-select-primary:hover ~ .cc-select-label,
.cc-select-primary .cc-select-items div:hover {
  background: var(--primary-2);
  border: var(--primary-2);
}
.cc-select-primary:active,
.cc-select-solid.cc-select-primary:active ~ .cc-select-label,
.cc-select-primary .cc-select-items div:active {
  background: var(--tertiary-2);
  border: var(--tertiary-2);
}

.cc-select-success,
.cc-select-success .cc-select-items {
  background: var(--success-0);
  border: var(--success-0);
  color: var(--success-0);
}
.cc-select-success:hover,
.cc-select-solid.cc-select-success:hover ~ .cc-select-label,
.cc-select-success .cc-select-items div:hover {
  background: var(--success-1);
  border: var(--success-1);
}
.cc-select-success:active,
.cc-select-solid.cc-select-success:active ~ .cc-select-label,
.cc-select-success .cc-select-items div:active {
  background: var(--success-2);
  border: var(--success-2);
}

.cc-select-error,
.cc-select-error .cc-select-items {
  background: var(--error-0);
  border: var(--error-0);
  color: var(--error-0);
}
.cc-select-error:hover,
.cc-select-solid.cc-select-error:hover ~ .cc-select-label,
.cc-select-error .cc-select-items div:hover {
  background: var(--error-1);
  border: var(--error-1);
}
.cc-select-error:active,
.cc-select-solid.cc-select-error:active ~ .cc-select-label,
.cc-select-error .cc-select-items div:active {
  background: var(--error-2);
  border: var(--error-2);
}

.cc-select-warning,
.cc-select-warning .cc-select-items {
  background: var(--warning-0);
  border: var(--warning-0);
  color: var(--warning-0);
}
.cc-select-warning:hover,
.cc-select-solid.cc-select-warning:hover ~ .cc-select-label,
.cc-select-warning .cc-select-items div:hover {
  background: var(--warning-1);
  border: var(--warning-1);
}
.cc-select-warning:active,
.cc-select-solid.cc-select-warning:active ~ .cc-select-label,
.cc-select-warning .cc-select-items div:active {
  background: var(--warning-2);
  border: var(--warning-2);
}

.cc-select-accent,
.cc-select-accent .cc-select-items {
  background: var(--accent-0);
  border: var(--accent-0);
  color: var(--accent-0);
}
.cc-select-accent:hover,
.cc-select-solid.cc-select-accent:hover ~ .cc-select-label,
.cc-select-accent .cc-select-items div:hover {
  background: var(--accent-1);
  border: var(--accent-1);
}
.cc-select-accent:active,
.cc-select-solid.cc-select-accent:active ~ .cc-select-label,
.cc-select-accent .cc-select-items div:active {
  background: var(--accent-2);
  border: var(--accent-2);
}

.cc-select-disabled {
  background: var(--tertiary-0);
  border: var(--tertiary-0);
  color: var(--tertiary-2);
  cursor: auto;
}

.cc-select-solid,
.cc-select-solid:hover,
.cc-select-solid:active,
.cc-select-solid:focus-visible {
  border-style: solid;
  outline: none;
  border-width: var(--width);
  color: var(--secondary-0);
}

.cc-select-text,
.cc-select-text:hover,
.cc-select-text:active,
.cc-select-text:focus-visible {
  border: unset;
  outline: none;
  border-bottom: var(--width) solid;
  background: unset;
}

.cc-select-outlined,
.cc-select-outlined:hover,
.cc-select-outlined:active,
.cc-select-outlined:focus-visible {
  border-style: solid;
  outline: none;
  border-width: var(--width);
  background: unset;
}

.cc-select-label {
  position: absolute;
  pointer-events: none;
  width: fit-content;
  height: min-content;
  top: 0;
  border-radius: var(--corner);
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.cc-select-outlined .cc-select-label,
.cc-select-text .cc-select-label {
  background: unset;
  border: unset;
}

.cc-select-items.cc-select-text {
  border: unset;
  background: var(--secondary-0);
}
.cc-select-items.cc-select-outlined {
  border: var(--width) solid;
  background: var(--secondary-0);
}
.cc-select-items.cc-select-solid {
  border: var(--width) solid;
  color: var(--secondary-0);
  scrollbar-color: currentColor var(--primary-0);
  scrollbar-arrow-color: var(--primary-0);
}

.cc-select-solid .cc-select-label,
.cc-select-solid span ~ .cc-select-label {
  color: var(--secondary-0);
}

.cc-select-outlined span ~ .cc-select-label,
.cc-select-text span ~ .cc-select-label {
  top: -1rem;
  border: solid var(--width);
  background: var(--secondary-0);
  display: inline-block;
}

.cc-select-solid span ~ .cc-select-label {
  top: -1rem;
  border: solid var(--width) var(--secondary-0);
  display: inline-block;
}`,o=`export interface SelectProps {
  values?: { option: string; group: boolean }[];
  value?: string;
  class?: string;
  disabled?: boolean;
  style?: CSSProperties;
  color?: "success" | "error" | "warning" | "accent" | "primary";
  variant?: "solid" | "outlined" | "text";
  rounded?: boolean;
  onChange?: QRL<(value: string) => void>;
  raised?: boolean;
  placeholder?: string;
  floatingPlaceholder?: boolean;
  maxHeight?: number;
  direction?: "down" | "up" | "left" | "right";
}
export const Select = component$<SelectProps>(
  ({
    values,
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
    maxHeight = 100,
    direction = "down",
  }) => {
    const ref = useSignal<Element>();
    const selectedOption = useSignal<undefined|string>(undefined);
    const showOptions = useSignal(false);

    useVisibleTask$(({ track }) => {
      track(() => showOptions.value);
      const element = ref.value?.getBoundingClientRect();
      if (element == undefined) return;
      const elementPosition = [
        element.bottom,
        element.top,
        element.left,
        element.right,
      ];
      if (direction == "left" || direction == "right") {
        elementPosition[0] += element.height / 2;
        elementPosition[1] -= element.height / 2;
      }
      if (elementPosition[0] > window.innerHeight) {
        // @ts-ignore
        ref.value.style.top = "unset";
        // @ts-ignore
        ref.value.style.bottom = "0vh";
        // @ts-ignore
        ref.value.style.transform = "unset";
      }
      if (elementPosition[1] < 0) {
        // @ts-ignore
        ref.value.style.bottom = "unset";
        // @ts-ignore
        ref.value.style.top = "0vh";
        // @ts-ignore
        ref.value.style.transform = "unset";
      }
      if (elementPosition[2] < 0) {
        // @ts-ignore
        ref.value.style.right = "unset";
        // @ts-ignore
        ref.value.style.left = "0vh";
      }
      if (elementPosition[3] > window.innerWidth) {
        // @ts-ignore
        ref.value.style.left = "unset";
        // @ts-ignore
        ref.value.style.right = "0vw";
      }
    });

    return (
      <div class={className} style={style}>
        <span
          class={\`cc-select-\${variant} cc-select-\${disabled ? "disabled" : color} \${rounded ? "cc-select-rounded" : "cc-select"} \${raised && "cc-select-raised"}\`}
        >
          <Slot name={"left"} />
          <span
            onClick$={$(() => {
              if (disabled) return;
              showOptions.value = !showOptions.value;
            })}
          >
            <label>
              {selectedOption.value ? selectedOption.value : value ? value : placeholder}
            </label>
            <i
              class={\`\${showOptions.value ? "cc-shortArrow-down" : "cc-shortArrow-left"} cc-icon-small\`}
            />
          </span>
          <div
            class={\`cc-select-items cc-select-\${variant}\`}
            style={{
              maxHeight,
              bottom: direction == "up" ? "100%" : "unset",
              top:
                direction == "down"
                  ? "100%"
                  : direction == "left" || direction == "right"
                    ? "50%"
                    : "unset",
              left: direction == "right" ? "100%" : "unset",
              right: direction == "left" ? "100%" : "unset",
              transform:
                direction == "left" || direction == "right"
                  ? "translateY(-50%)"
                  : "unset",
            }}
            hidden={!showOptions.value}
            ref={ref}
          >
            {values?.map((option) =>
              option.group ? (
                <span>
                  <b>{option.option}</b>
                </span>
              ) : (
                <div
                  onClick$={$(() => {
                    selectedOption.value = option.option;
                    showOptions.value = false;
                    onChange && onChange(option.option);
                  })}
                >
                  {option.option}
                </div>
              ),
            )}
          </div>
          <Slot name={"right"} />
          {floatingPlaceholder && placeholder && (
            <label
              style={
                selectedOption.value == undefined
                  ? { visibility: "hidden" }
                  : {}
              }
              class={\`cc-select-label cc-select-\${disabled ? "disabled" : color}\`}
            >
              {placeholder}
            </label>
          )}
        </span>
      </div>
    );
  },
);`,i=c(t(()=>e(()=>import("./q-DQGzZWT4.js"),[]),"s_MY9iOoSnlzA"));export{l as _auto_cssCode,o as _auto_tsCode,i as default};
