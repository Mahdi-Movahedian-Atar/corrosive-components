import { component$, CSSProperties } from "@builder.io/qwik";

export interface skeletonProps {
  height?: string;
  width?: string;
  animation?: "wave" | "pulse" | "none";
  color?: "success" | "error" | "warning" | "accent" | "primary";
  variant?: "solid" | "outlined";
  rounded?: boolean;
  class?: string;
  style?: CSSProperties;
}

export const Skeleton = component$<skeletonProps>(
  ({
    height = "100%",
    width = "100%",
    animation = "wave",
    color = "primary",
    variant = "solid",
    rounded = false,
    class: className = undefined,
    style = {
      display: "inline-flex",
      height: "100%",
      width: "100%",
      alignContent: "center",
    },
  }) => (
    <div style={style} class={className}>
      <div
        style={{ height, width }}
        class={`cc-skeleton ${rounded && "cc-skeleton-rounded"} cc-skeleton-${animation} cc-skeleton-${color} cc-skeleton-${variant}`}
      />
    </div>
  ),
);
