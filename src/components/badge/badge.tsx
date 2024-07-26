import { component$, CSSProperties, Slot } from "@builder.io/qwik";

export interface BadgeProps {
  class?: string;
  style?: CSSProperties;
  size?: number;
  sizeType?: "rem" | "rm" | "px" | string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  shape?: "circle" | "square" | number;
  variant?: "solid" | "outlined" | "text";
  color?: "success" | "error" | "warning" | "accent" | "primary";
}
export const Badge = component$<BadgeProps>(
  ({
    class: className,
    style = {
      height: 0,
      width: 0,
    },
    size = 15,
    sizeType = "px",
    shape = "circle",
    position = "top-right",
    variant = "solid",
    color = "primary",
  }) => {
    const thisStyles = {
      "font-size": size.toString() + sizeType,
      width: "fit-content",
      height: "fit-content",
      borderRadius:
        shape === "circle"
          ? "50vmax"
          : shape === "square"
            ? "0%"
            : shape.toString() + "vmax",
    };

    return (
      <div class={className} style={style}>
        <span
          class={`cc-badge cc-badge-${position} cc-badge-${color} cc-badge-${variant}`}
          style={thisStyles}
        >
          <Slot />
        </span>
      </div>
    );
  },
);
