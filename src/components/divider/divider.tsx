import { component$, Slot, CSSProperties } from "@builder.io/qwik";

export interface DividerProps {
  vertical?: boolean;
  offset?: number;
  class?: string;
  style?: CSSProperties;
  color?: "success" | "error" | "warning" | "accent" | "primary";
  variant?: "solid" | "outlined" | "text";
}

export const Divider = component$<DividerProps>(
  ({
    vertical = false,
    offset = 50,
    class: className = undefined,
    style = { height: "100%", width: "100%" },
    variant = "outlined",
    color = "primary",
  }) => {
    return (
      <div style={style} class={className}>
        <div
          class={`cc-divider ${vertical && "cc-divider-vertical"} cc-divider-${color} cc-divider-${variant}`}
        >
          <div
            style={`${vertical ? "height" : "width"} : ${offset}%`}
            class={`cc-divider-panel`}
          >
            <Slot name="firstPanel" />
          </div>
          <div
            style={`${vertical ? "height" : "width"} : ${100 - offset}%`}
            class={"cc-divider-panel"}
          >
            <Slot name="secondPanel" />
          </div>
        </div>
      </div>
    );
  },
);
