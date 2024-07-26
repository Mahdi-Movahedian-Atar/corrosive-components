import { $, component$, CSSProperties, QRL, Slot } from "@builder.io/qwik";

export interface FileInputProps {
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
          class={`cc-fileInput-${variant} cc-fileInput-${disabled ? "disabled" : color} ${rounded ? "cc-fileInput-rounded" : "cc-fileInput"} ${raised && "cc-fileInput-raised"}`}
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
              class={`cc-fileInput-label cc-fileInput-${disabled ? "disabled" : color}`}
            >
              {placeholder}
            </label>
          )}
        </spam>
      </div>
    );
  },
);
