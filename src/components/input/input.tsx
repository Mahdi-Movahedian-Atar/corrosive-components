import {
  $,
  component$,
  CSSProperties,
  HTMLInputTypeAttribute,
  QRL,
  Slot,
  useSignal,
} from "@builder.io/qwik";

export interface InputProps {
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
    const v = useSignal(value);

    return (
      <div class={className} style={style}>
        <spam
          class={`cc-input-${variant} cc-input-${disabled ? "disabled" : color} ${rounded ? "cc-input-rounded" : "cc-input"} ${raised && "cc-input-raised"}`}
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
            value={v.value}
          />
          <Slot name={"right"} />
          {floatingPlaceholder && placeholder && (
            <label
              class={`cc-input-label cc-input-${disabled ? "disabled" : color}`}
            >
              {placeholder}
            </label>
          )}
        </spam>
      </div>
    );
  },
);
