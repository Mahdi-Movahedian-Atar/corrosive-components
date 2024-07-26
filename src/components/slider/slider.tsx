import {
  component$,
  useStore,
  $,
  useOn,
  useSignal,
  CSSProperties,
  QRL,
} from "@builder.io/qwik";

export interface SliderProps {
  disabled?: boolean;
  vertical?: boolean;
  type?: "minRange" | "maxRange" | "dual";
  color?: "success" | "error" | "warning" | "accent" | "primary";
  floatingValues?: "unset" | "set" | "alwaysShow";
  steps?: number;
  onChange?: QRL<(min?: number, max?: number) => void>;
  min?: number;
  max?: number;
  tolerance?: number;
  defaultMin?: number;
  defaultMax?: number;
  class?: string;
  style?: CSSProperties;
}

function getDecimalPlacesRegex(num: number): number {
  const match = num.toString().match(/\.(\d+)$/);
  return match ? match[1].length : 0;
}

function roundWithTolerance(
  value: number,
  step: number,
  tolerance: number,
  decimal: number,
): number {
  if (tolerance === 0) {
    return value; // No rounding needed if tolerance is 0
  }
  return parseFloat(
    (Math.round(value / tolerance) * tolerance).toFixed(decimal),
  );
}

export const Slider = component$<SliderProps>(
  ({
    disabled = false,
    vertical = false,
    color = "primary",
    floatingValues = "set",
    type = "maxRange",
    steps = 1,
    defaultMin = 0,
    defaultMax = 100,
    tolerance = 1,
    min = 0,
    max = 100,
    class: className = undefined,
    style = { height: "100%", width: "100%" },
    onChange = undefined,
  }) => {
    const valueSize = max - min;
    const stepSize = 1 / steps;
    const decimal = getDecimalPlacesRegex(tolerance);

    const thisRef = useSignal<Element>();

    const isMouseDown = useStore([false, false]);
    const sliderLocations = useStore([
      (defaultMin - min) / valueSize,
      (defaultMax - min) / valueSize,
    ]);

    useOn(
      "mousemove",
      $((event: Event) => {
        (isMouseDown[0] || isMouseDown[1]) && event.preventDefault();
        const rect = thisRef.value!.getBoundingClientRect();

        if (isMouseDown[0] && type != "maxRange") {
          sliderLocations[0] = vertical
            ? (event as MouseEvent).offsetY / rect.height
            : (event as MouseEvent).offsetX / rect.width;
          // @ts-ignore
          steps > 2 &&
            (sliderLocations[0] =
              Math.round(sliderLocations[0] / stepSize) * stepSize);

          0 > sliderLocations[0] && (sliderLocations[0] = 0);

          sliderLocations[0] > sliderLocations[1] &&
            (sliderLocations[0] = sliderLocations[1]);

          onChange &&
            onChange(
              roundWithTolerance(
                sliderLocations[0] * valueSize + min,
                steps,
                tolerance,
                decimal,
              ),
              roundWithTolerance(
                sliderLocations[1] * valueSize + min,
                steps,
                tolerance,
                decimal,
              ),
            );
        }

        if (isMouseDown[1] && type != "minRange") {
          sliderLocations[1] = vertical
            ? (event as MouseEvent).offsetY / rect.height
            : (event as MouseEvent).offsetX / rect.width;
          // @ts-ignore
          steps > 2 &&
            (sliderLocations[1] =
              Math.round(sliderLocations[1] / stepSize) * stepSize);

          1 < sliderLocations[1] && (sliderLocations[1] = 1);

          sliderLocations[0] > sliderLocations[1] &&
            (sliderLocations[1] = sliderLocations[0]);

          onChange &&
            onChange(
              roundWithTolerance(
                sliderLocations[0] * valueSize + min,
                steps,
                tolerance,
                decimal,
              ),
              roundWithTolerance(
                sliderLocations[1] * valueSize + min,
                steps,
                tolerance,
                decimal,
              ),
            );
        }
      }),
    );
    useOn(
      "touchmove",
      $((event: TouchEvent) => {
        (isMouseDown[0] || isMouseDown[1]) && event.preventDefault();
        const rect = thisRef.value!.getBoundingClientRect();

        if (event.touches.length == 0) {
          isMouseDown[0] = false;
          isMouseDown[1] = false;
        }

        if (isMouseDown[0] && type != "maxRange") {
          event.preventDefault();
          sliderLocations[0] = vertical
            ? (event.touches[0].clientY - rect.top) / rect.height
            : (event.touches[0].clientX - rect.left) / rect.width;
          // @ts-ignore
          steps > 1 &&
            (sliderLocations[0] =
              Math.round(sliderLocations[0] / stepSize) * stepSize);

          0 > sliderLocations[0] && (sliderLocations[0] = 0);

          sliderLocations[0] > sliderLocations[1] &&
            (sliderLocations[0] = sliderLocations[1]);

          onChange &&
            onChange(
              roundWithTolerance(
                sliderLocations[0] * valueSize + min,
                steps,
                tolerance,
                decimal,
              ),
              roundWithTolerance(
                sliderLocations[1] * valueSize + min,
                steps,
                tolerance,
                decimal,
              ),
            );
        }

        if (isMouseDown[1] && type != "minRange") {
          event.preventDefault();
          sliderLocations[1] = vertical
            ? (event.touches[0].clientY - rect.top) / rect.height
            : (event.touches[0].clientX - rect.left) / rect.width;
          // @ts-ignore
          steps > 1 &&
            (sliderLocations[1] =
              Math.round(sliderLocations[1] / stepSize) * stepSize);

          1 < sliderLocations[1] && (sliderLocations[1] = 1);

          sliderLocations[0] > sliderLocations[1] &&
            (sliderLocations[1] = sliderLocations[0]);

          onChange &&
            onChange(
              roundWithTolerance(
                sliderLocations[0] * valueSize + min,
                steps,
                tolerance,
                decimal,
              ),
              roundWithTolerance(
                sliderLocations[1] * valueSize + min,
                steps,
                tolerance,
                decimal,
              ),
            );
        }
      }),
    );
    useOn(
      "mouseup",
      $(() => {
        isMouseDown[0] = false;
        isMouseDown[1] = false;
      }),
    );
    useOn(
      "touchend",
      $(() => {
        isMouseDown[0] = false;
        isMouseDown[1] = false;
      }),
    );
    useOn(
      "mouseleave",
      $(() => {
        isMouseDown[0] = false;
        isMouseDown[1] = false;
      }),
    );

    return (
      <div style={style} class={className}>
        <div
          class={`${vertical ? "cc-slider-vertical" : "cc-slider"} cc-slider-${disabled ? "disabled" : color}`}
          ref={thisRef}
        >
          <span class="cc-slider-track">
            {steps && Array.from({ length: steps }).map(() => <span />)}
          </span>
          <span
            class="cc-slider-track-active"
            style={
              vertical
                ? {
                    height: `${sliderLocations[1] * 100 - sliderLocations[0] * 100}%`,
                    top: `${sliderLocations[0] * 100}%`,
                  }
                : {
                    width: `${sliderLocations[1] * 100 - sliderLocations[0] * 100}%`,
                    left: `${sliderLocations[0] * 100}%`,
                  }
            }
          >
            <label
              class={"cc-slider-value"}
              style={{
                visibility:
                  type != "maxRange" &&
                  (floatingValues == "alwaysShow" ||
                    (floatingValues == "set" && isMouseDown[0]))
                    ? "visible"
                    : "hidden",
              }}
            >
              {roundWithTolerance(
                sliderLocations[0] * valueSize + min,
                steps,
                tolerance,
                decimal,
              )}
            </label>
            {steps &&
              Array.from({
                length: Math.round(
                  (sliderLocations[1] - sliderLocations[0]) * steps,
                ),
              }).map(() => <span />)}
            <label
              class={"cc-slider-value"}
              style={{
                visibility:
                  type != "minRange" &&
                  (floatingValues == "alwaysShow" ||
                    (floatingValues == "set" && isMouseDown[1]))
                    ? "visible"
                    : "hidden",
              }}
            >
              {roundWithTolerance(
                sliderLocations[1] * valueSize + min,
                steps,
                tolerance,
                decimal,
              )}
            </label>
          </span>
          {type != "maxRange" && (
            <input
              type="range"
              min={0}
              max={10000}
              value={sliderLocations[0] * 10000}
              step={steps < 2 ? undefined : stepSize}
              disabled={disabled}
              onMouseDown$={$(() => !disabled && (isMouseDown[0] = true))}
              onMouseUp$={$(() => !disabled && (isMouseDown[0] = false))}
              onTouchStart$={$(() => !disabled && (isMouseDown[0] = true))}
              onTouchEnd$={$(() => !disabled && (isMouseDown[0] = false))}
              onChange$={() => {
                isMouseDown[0] = false;

                0 > sliderLocations[0] && (sliderLocations[0] = 0);

                sliderLocations[0] > sliderLocations[1] &&
                  (sliderLocations[0] = sliderLocations[1]);
              }}
            />
          )}
          {type != "minRange" && (
            <input
              type="range"
              min={0}
              max={10000}
              value={sliderLocations[1] * 10000}
              step={steps < 2 ? undefined : stepSize}
              disabled={disabled}
              onMouseDown$={$(() => !disabled && (isMouseDown[1] = true))}
              onMouseUp$={$(() => {
                !disabled && (isMouseDown[1] = false);
              })}
              onTouchStart$={$(() => !disabled && (isMouseDown[1] = true))}
              onTouchEnd$={$(() => !disabled && (isMouseDown[1] = false))}
              onChange$={() => {
                isMouseDown[1] = false;

                1 < sliderLocations[1] && (sliderLocations[1] = 1);

                sliderLocations[0] > sliderLocations[1] &&
                  (sliderLocations[1] = sliderLocations[0]);
              }}
            />
          )}
        </div>
      </div>
    );
  },
);
