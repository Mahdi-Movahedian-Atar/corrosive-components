import {
  component$,
  CSSProperties,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";

export interface ProgressProps {
  size?: number;
  width?: number;
  progress: number;
  class?: string;
  style?: CSSProperties;
  type?: "circular" | "linear";
  color?: "success" | "error" | "warning" | "accent" | "primary";
  variant?: "infinite" | "value" | "withLabel";
}

export const Progress = component$<ProgressProps>(
  ({
    size = 100,
    width = 10,
    progress,
    class: className = undefined,
    style = {
      display: "inline-flex",
      alignContent: "center",
    },
    variant = "infinite",
    type = "circular",
    color = "primary",
  }) => {
    const ref = useSignal<Element>();

    const center = size / 2;
    const radius = center - width / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    useVisibleTask$(() => {
      if (ref.value) {
        // @ts-ignore
        ref.value.style.setProperty("--dasharray", `${circumference}`);
      }
    });

    return (
      <div style={style} class={className}>
        {type == "circular" ? (
          <svg
            width={size}
            height={size}
            class={`cc-progress-circular ${variant == "infinite" && "cc-progress-infinite"} cc-progress-${color}`}
          >
            {variant == "withLabel" && (
              <text
                x="50%"
                y="50%"
                dy=".3em"
                text-anchor="middle"
                class="progress-text"
                font-size={(center - width) * 0.8}
              >
                {progress}%
              </text>
            )}
            <circle
              ref={ref}
              stroke-width={width}
              fill="none"
              cx={center}
              cy={center}
              r={radius}
              stroke-dasharray={circumference}
              stroke-dashoffset={offset}
            />
          </svg>
        ) : (
          <div
            class={`cc-progress-linear ${variant == "infinite" && "cc-progress-infinite"} cc-progress-${color}`}
            style={{ height: width }}
          >
            {variant == "withLabel" && (
              <spam style={{ fontSize: `${width}px` }}>{progress}%</spam>
            )}
            <div style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>
    );
  },
);
