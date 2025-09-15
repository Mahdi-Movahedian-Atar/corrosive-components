import{_ as e}from"./q-uemlvruI.js";import{H as r,q as o}from"./q-8bdPC3mX.js";const c=`.cc-slider {
  display: flex;
  position: relative;
  width: 100%;
  height: var(--large-icon);
  align-items: center;
}
.cc-slider-vertical {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  height: 100%;
  width: var(--large-icon);
  align-items: center;
}
.cc-slider input,
.cc-slider-vertical input {
  -webkit-transition: unset;
  transition: unset;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: calc(100% + var(--large-icon));
  left: calc(var(--large-icon) / -2);
  outline: none;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;
}
.cc-slider-vertical input {
  -webkit-transition: unset;
  transition: unset;
  width: unset;
  left: 0;
  right: 0;
  top: calc(var(--large-icon) / -2);
  bottom: unset;
  height: calc(100% + var(--large-icon));
  writing-mode: vertical-lr;
}

.cc-slider-track,
.cc-slider-track-active {
  -webkit-transition: unset;
  transition: unset;
  width: 100%;
  height: 50%;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border: solid var(--width);
  border-radius: 100vh;
  display: inline-flex;
}
.cc-slider-vertical .cc-slider-track,
.cc-slider-vertical .cc-slider-track-active {
  top: unset;
  bottom: unset;
  left: 0;
  right: 0;
  width: 50%;
  height: 100%;
  flex-direction: column;
}

.cc-slider-track span,
.cc-slider-track-active span {
  border: unset;
  background: unset;
  width: 100%;
  border: unset;
  border-right: solid currentColor var(--width);
}
.cc-slider-vertical .cc-slider-track span,
.cc-slider-vertical .cc-slider-track-active span {
  border: unset;
  background: unset;
  height: 100%;
  border: unset;
  border-bottom: solid currentColor var(--width);
}
.cc-slider-track span:last-child,
.cc-slider-track-active span:last-child {
  border: transparent;
}

.cc-slider input::-webkit-slider-runnable-track,
.cc-slider-vertical input::-webkit-slider-runnable-track {
  -webkit-appearance: none;
}
.cc-slider input::-moz-range-track,
.cc-slider-vertical input::-moz-range-track {
  -moz-appearance: none;
}
.cc-slider input::-ms-track,
.cc-slider-vertical input::-ms-track {
  appearance: none;
}
.cc-slider input::-webkit-slider-thumb,
.cc-slider-vertical input::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: var(--large-icon);
  width: var(--large-icon);
  cursor: pointer;
  pointer-events: auto;
  border: solid var(--width);
  border-radius: 100vh;
}
.cc-slider input::-moz-range-thumb,
.cc-slider-vertical input::-moz-range-thumb {
  -moz-appearance: none;
  height: var(--large-icon);
  width: var(--large-icon);
  cursor: pointer;
  border: solid var(--width);
  border-radius: 100vh;
  pointer-events: auto;
}
.cc-slider input::-ms-thumb,
.cc-slider-vertical input::-ms-thumb {
  appearance: none;
  height: var(--large-icon);
  width: var(--large-icon);
  cursor: pointer;
  border: solid var(--width);
  border-radius: 100vh;
  pointer-events: auto;
}
.cc-slider-value {
  z-index: 9999;
  position: absolute;
  width: fit-content;
  height: min-content;
  background-color: inherit;
  border-color: inherit;
  color: inherit;
  border-radius: var(--corner);
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.cc-slider .cc-slider-value:first-child {
  left: 0;
  transform: translate(-50%, calc(var(--large-icon) / 2));
}
.cc-slider .cc-slider-value:last-child {
  right: 0;
  transform: translate(50%, calc(var(--large-icon) / 2));
}
.cc-slider-vertical .cc-slider-value:first-child {
  top: 0;
  transform: translate(calc(var(--large-icon) / 2), -50%);
}
.cc-slider-vertical .cc-slider-value:last-child {
  bottom: 0;
  transform: translate(calc(var(--large-icon) / 2), 50%);
}

.cc-slider-disabled .cc-slider-track {
  background: var(--secondary-0);
  border-color: var(--tertiary-2);
  color: var(--tertiary-2);
}
.cc-slider-disabled .cc-slider-track-active {
  background: var(--tertiary-2);
  border-color: var(--secondary-0);
  color: var(--secondary-0);
}
.cc-slider-disabled input::-webkit-slider-thumb {
  background: var(--tertiary-2);
  border-color: var(--secondary-0);
}
.cc-slider-disabled input::-moz-range-thumb {
  background: var(--tertiary-2);
  border-color: var(--secondary-0);
}
.cc-slider-disabled input::-ms-thumb {
  background: var(--tertiary-2);
  border-color: var(--secondary-0);
}

.cc-slider-primary .cc-slider-track {
  background: var(--secondary-0);
  border-color: var(--primary-0);
  color: var(--primary-0);
}
.cc-slider-primary .cc-slider-track-active {
  background: var(--primary-0);
  border-color: var(--secondary-0);
  color: var(--secondary-0);
}
.cc-slider-primary input::-webkit-slider-thumb {
  background: var(--primary-0);
  border-color: var(--secondary-0);
}
.cc-slider-primary input::-moz-range-thumb {
  background: var(--primary-0);
  border-color: var(--secondary-0);
}
.cc-slider-primary input::-ms-thumb {
  background: var(--primary-0);
  border-color: var(--secondary-0);
}
.cc-slider-primary input:hover::-ms-thumb {
  background: var(--tertiary-2);
  border-color: var(--secondary-1);
}
.cc-slider-primary input:active::-ms-thumb {
  background: var(--secondary-0);
  border-color: var(--primary-0);
}
.cc-slider-primary input:hover::-moz-range-thumb {
  background: var(--tertiary-2);
  border-color: var(--secondary-1);
}
.cc-slider-primary input:active::-moz-range-thumb {
  background: var(--secondary-0);
  border-color: var(--primary-0);
}
.cc-slider-primary input:hover::-webkit-slider-thumb {
  background: var(--tertiary-2);
  border-color: var(--secondary-1);
}
.cc-slider-primary input:active::-webkit-slider-thumb {
  background: var(--secondary-0);
  border-color: var(--primary-0);
}

.cc-slider-accent .cc-slider-track {
  background: var(--secondary-0);
  border-color: var(--accent-0);
  color: var(--accent-0);
}
.cc-slider-accent .cc-slider-track-active {
  background: var(--accent-0);
  border-color: var(--secondary-0);
  color: var(--secondary-0);
}
.cc-slider-accent input::-webkit-slider-thumb {
  background: var(--accent-0);
  border-color: var(--secondary-0);
}
.cc-slider-accent input::-moz-range-thumb {
  background: var(--accent-0);
  border-color: var(--secondary-0);
}
.cc-slider-accent input::-ms-thumb {
  background: var(--accent-0);
  border-color: var(--secondary-0);
}
.cc-slider-accent input:hover::-ms-thumb {
  background: var(--accent-1);
  border-color: var(--accent-2);
}
.cc-slider-accent input:active::-ms-thumb {
  background: var(--secondary-0);
  border-color: var(--accent-0);
}
.cc-slider-accent input:hover::-moz-range-thumb {
  background: var(--accent-1);
  border-color: var(--accent-2);
}
.cc-slider-accent input:active::-moz-range-thumb {
  background: var(--secondary-0);
  border-color: var(--accent-0);
}
.cc-slider-accent input:hover::-webkit-slider-thumb {
  background: var(--accent-1);
  border-color: var(--accent-2);
}
.cc-slider-accent input:active::-webkit-slider-thumb {
  background: var(--secondary-0);
  border-color: var(--accent-0);
}

.cc-slider-warning .cc-slider-track {
  background: var(--secondary-0);
  border-color: var(--warning-0);
  color: var(--warning-0);
}
.cc-slider-warning .cc-slider-track-active {
  background: var(--warning-0);
  border-color: var(--secondary-0);
  color: var(--secondary-0);
}
.cc-slider-warning input::-webkit-slider-thumb {
  background: var(--warning-0);
  border-color: var(--secondary-0);
}
.cc-slider-warning input::-moz-range-thumb {
  background: var(--warning-0);
  border-color: var(--secondary-0);
}
.cc-slider-warning input::-ms-thumb {
  background: var(--warning-0);
  border-color: var(--secondary-0);
}
.cc-slider-warning input:hover::-ms-thumb {
  background: var(--warning-1);
  border-color: var(--warning-2);
}
.cc-slider-warning input:active::-ms-thumb {
  background: var(--secondary-0);
  border-color: var(--warning-0);
}
.cc-slider-warning input:hover::-moz-range-thumb {
  background: var(--warning-1);
  border-color: var(--warning-2);
}
.cc-slider-warning input:active::-moz-range-thumb {
  background: var(--secondary-0);
  border-color: var(--warning-0);
}
.cc-slider-warning input:hover::-webkit-slider-thumb {
  background: var(--warning-1);
  border-color: var(--warning-2);
}
.cc-slider-warning input:active::-webkit-slider-thumb {
  background: var(--secondary-0);
  border-color: var(--warning-0);
}

.cc-slider-error .cc-slider-track {
  background: var(--secondary-0);
  border-color: var(--error-0);
  color: var(--error-0);
}
.cc-slider-error .cc-slider-track-active {
  background: var(--error-0);
  border-color: var(--secondary-0);
  color: var(--secondary-0);
}
.cc-slider-error input::-webkit-slider-thumb {
  background: var(--error-0);
  border-color: var(--secondary-0);
}
.cc-slider-error input::-moz-range-thumb {
  background: var(--error-0);
  border-color: var(--secondary-0);
}
.cc-slider-error input::-ms-thumb {
  background: var(--error-0);
  border-color: var(--secondary-0);
}
.cc-slider-error input:hover::-ms-thumb {
  background: var(--error-1);
  border-color: var(--error-2);
}
.cc-slider-error input:active::-ms-thumb {
  background: var(--secondary-0);
  border-color: var(--error-0);
}
.cc-slider-error input:hover::-moz-range-thumb {
  background: var(--error-1);
  border-color: var(--error-2);
}
.cc-slider-error input:active::-moz-range-thumb {
  background: var(--secondary-0);
  border-color: var(--error-0);
}
.cc-slider-error input:hover::-webkit-slider-thumb {
  background: var(--error-1);
  border-color: var(--error-2);
}
.cc-slider-error input:active::-webkit-slider-thumb {
  background: var(--secondary-0);
  border-color: var(--error-0);
}

.cc-slider-success .cc-slider-track {
  background: var(--secondary-0);
  border-color: var(--success-0);
  color: var(--success-0);
}
.cc-slider-success .cc-slider-track-active {
  background: var(--success-0);
  border-color: var(--secondary-0);
  color: var(--secondary-0);
}
.cc-slider-success input::-webkit-slider-thumb {
  background: var(--success-0);
  border-color: var(--secondary-0);
}
.cc-slider-success input::-moz-range-thumb {
  background: var(--success-0);
  border-color: var(--secondary-0);
}
.cc-slider-success input::-ms-thumb {
  background: var(--success-0);
  border-color: var(--secondary-0);
}
.cc-slider-success input:hover::-ms-thumb {
  background: var(--success-1);
  border-color: var(--success-2);
}
.cc-slider-success input:active::-ms-thumb {
  background: var(--secondary-0);
  border-color: var(--success-0);
}
.cc-slider-success input:hover::-moz-range-thumb {
  background: var(--success-1);
  border-color: var(--success-2);
}
.cc-slider-success input:active::-moz-range-thumb {
  background: var(--secondary-0);
  border-color: var(--success-0);
}
.cc-slider-success input:hover::-webkit-slider-thumb {
  background: var(--success-1);
  border-color: var(--success-2);
}
.cc-slider-success input:active::-webkit-slider-thumb {
  background: var(--secondary-0);
  border-color: var(--success-0);
}`,s=`export interface SliderProps {
  disabled?: boolean
  vertical?: boolean
  type?: 'minRange' | 'maxRange' | 'dual'
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  floatingValues?: 'unset' | 'set' | 'alwaysShow'
  steps?: number
  onChange?: QRL<(min?: number, max?: number) => void>
  min?: number
  max?: number
  tolerance?: number
  defaultMin?: number
  defaultMax?: number
  class?: string
  style?: CSSProperties
}

function getDecimalPlacesRegex(num: number): number {
  const match = num.toString().match(/(+)$/)
  return match ? match[1].length : 0
}

function roundWithTolerance(
  value: number,
  step: number,
  tolerance: number,
  decimal: number
): number {
  if (tolerance === 0) {
    return value // No rounding needed if tolerance is 0
  }
  return parseFloat(
    (Math.round(value / tolerance) * tolerance).toFixed(decimal)
  )
}

export const Slider = component$<SliderProps>(
  ({
    disabled = false,
    vertical = false,
    color = 'primary',
    floatingValues = 'set',
    type = 'maxRange',
    steps = 1,
    defaultMin = 0,
    defaultMax = 100,
    tolerance = 1,
    min = 0,
    max = 100,
    class: className = undefined,
    style = { height: '100%', width: '100%' },
    onChange = undefined,
  }) => {
    const valueSize = max - min
    const stepSize = 1 / steps
    const decimal = getDecimalPlacesRegex(tolerance)

    const defaultSliderLocations = [
      (defaultMin - min) / valueSize,
      (defaultMax - min) / valueSize,
    ]

    const thisRef = useSignal<Element>()

    const isMouseDown = useStore([false, false])
    const sliderLocations = useStore<(number | undefined)[]>([
      undefined,
      undefined,
    ])

    useOn(
      'mousemove',
      $((event: Event) => {
        ;(isMouseDown[0] || isMouseDown[1]) && event.preventDefault()
        const rect = thisRef.value!.getBoundingClientRect()

        if (isMouseDown[0] && type != 'maxRange') {
          sliderLocations[0] = vertical
            ? (event as MouseEvent).offsetY / rect.height
            : (event as MouseEvent).offsetX / rect.width
          // @ts-ignore
          steps > 2 &&
            (sliderLocations[0] =
              Math.round(sliderLocations[0] / stepSize) * stepSize)

          0 > sliderLocations[0] && (sliderLocations[0] = 0)

          sliderLocations[0] >
            (sliderLocations[1]
              ? sliderLocations[1]
              : defaultSliderLocations[1]) &&
            (sliderLocations[0] = sliderLocations[1])

          onChange &&
            onChange(
              roundWithTolerance(
                (sliderLocations[0]
                  ? sliderLocations[0]
                  : defaultSliderLocations[0]) *
                  valueSize +
                  min,
                steps,
                tolerance,
                decimal
              ),
              roundWithTolerance(
                (sliderLocations[1]
                  ? sliderLocations[1]
                  : defaultSliderLocations[1]) *
                  valueSize +
                  min,
                steps,
                tolerance,
                decimal
              )
            )
        }

        if (isMouseDown[1] && type != 'minRange') {
          sliderLocations[1] = vertical
            ? (event as MouseEvent).offsetY / rect.height
            : (event as MouseEvent).offsetX / rect.width
          // @ts-ignore
          steps > 2 &&
            (sliderLocations[1] =
              Math.round(sliderLocations[1] / stepSize) * stepSize)

          1 < sliderLocations[1] && (sliderLocations[1] = 1)
          ;(sliderLocations[0]
            ? sliderLocations[0]
            : defaultSliderLocations[0]) > sliderLocations[1] &&
            (sliderLocations[1] = sliderLocations[0])

          onChange &&
            onChange(
              roundWithTolerance(
                (sliderLocations[0]
                  ? sliderLocations[0]
                  : defaultSliderLocations[0]) *
                  valueSize +
                  min,
                steps,
                tolerance,
                decimal
              ),
              roundWithTolerance(
                (sliderLocations[1]
                  ? sliderLocations[1]
                  : defaultSliderLocations[1]) *
                  valueSize +
                  min,
                steps,
                tolerance,
                decimal
              )
            )
        }
      })
    )
    useOn(
      'touchmove',
      $((event: TouchEvent) => {
        sliderLocations[0] = (defaultMin - min) / valueSize
        sliderLocations[1] = (defaultMax - min) / valueSize
        ;(isMouseDown[0] || isMouseDown[1]) && event.preventDefault()
        const rect = thisRef.value!.getBoundingClientRect()

        if (event.touches.length == 0) {
          isMouseDown[0] = false
          isMouseDown[1] = false
        }

        if (isMouseDown[0] && type != 'maxRange') {
          event.preventDefault()
          sliderLocations[0] = vertical
            ? (event.touches[0].clientY - rect.top) / rect.height
            : (event.touches[0].clientX - rect.left) / rect.width
          // @ts-ignore
          steps > 1 &&
            (sliderLocations[0] =
              Math.round(sliderLocations[0] / stepSize) * stepSize)

          0 > sliderLocations[0] && (sliderLocations[0] = 0)

          sliderLocations[0] > sliderLocations[1] &&
            (sliderLocations[0] = sliderLocations[1])

          onChange &&
            onChange(
              roundWithTolerance(
                sliderLocations[0] * valueSize + min,
                steps,
                tolerance,
                decimal
              ),
              roundWithTolerance(
                sliderLocations[1] * valueSize + min,
                steps,
                tolerance,
                decimal
              )
            )
        }

        if (isMouseDown[1] && type != 'minRange') {
          event.preventDefault()
          sliderLocations[1] = vertical
            ? (event.touches[0].clientY - rect.top) / rect.height
            : (event.touches[0].clientX - rect.left) / rect.width
          // @ts-ignore
          steps > 1 &&
            (sliderLocations[1] =
              Math.round(sliderLocations[1] / stepSize) * stepSize)

          1 < sliderLocations[1] && (sliderLocations[1] = 1)

          sliderLocations[0] > sliderLocations[1] &&
            (sliderLocations[1] = sliderLocations[0])

          onChange &&
            onChange(
              roundWithTolerance(
                sliderLocations[0] * valueSize + min,
                steps,
                tolerance,
                decimal
              ),
              roundWithTolerance(
                sliderLocations[1] * valueSize + min,
                steps,
                tolerance,
                decimal
              )
            )
        }
      })
    )
    useOn(
      'mouseup',
      $(() => {
        isMouseDown[0] = false
        isMouseDown[1] = false
      })
    )
    useOn(
      'touchend',
      $(() => {
        isMouseDown[0] = false
        isMouseDown[1] = false
      })
    )
    useOn(
      'mouseleave',
      $(() => {
        isMouseDown[0] = false
        isMouseDown[1] = false
      })
    )

    return (
      <div style={style} class={className}>
        <div
          class={\`\${vertical ? 'cc-slider-vertical' : 'cc-slider'} cc-slider-\${disabled ? 'disabled' : color}\`}
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
                    height: \`\${(sliderLocations[1] ? sliderLocations[1] : defaultSliderLocations[1]) * 100 - (sliderLocations[0] ? sliderLocations[0] : defaultSliderLocations[0]) * 100}%\`,
                    top: \`\${(sliderLocations[0] ? sliderLocations[0] : defaultSliderLocations[0]) * 100}%\`,
                  }
                : {
                    width: \`\${(sliderLocations[1] ? sliderLocations[1] : defaultSliderLocations[1]) * 100 - (sliderLocations[0] ? sliderLocations[0] : defaultSliderLocations[0]) * 100}%\`,
                    left: \`\${(sliderLocations[0] ? sliderLocations[0] : defaultSliderLocations[0]) * 100}%\`,
                  }
            }
          >
            <label
              class={'cc-slider-value'}
              style={{
                visibility:
                  type != 'maxRange' &&
                  (floatingValues == 'alwaysShow' ||
                    (floatingValues == 'set' && isMouseDown[0]))
                    ? 'visible'
                    : 'hidden',
              }}
            >
              {roundWithTolerance(
                (sliderLocations[0]
                  ? sliderLocations[0]
                  : defaultSliderLocations[0]) *
                  valueSize +
                  min,
                steps,
                tolerance,
                decimal
              )}
            </label>
            {steps &&
              Array.from({
                length: Math.round(
                  ((sliderLocations[1]
                    ? sliderLocations[1]
                    : defaultSliderLocations[1]) -
                    (sliderLocations[0]
                      ? sliderLocations[0]
                      : defaultSliderLocations[0])) *
                    steps
                ),
              }).map(() => <span />)}
            <label
              class={'cc-slider-value'}
              style={{
                visibility:
                  type != 'minRange' &&
                  (floatingValues == 'alwaysShow' ||
                    (floatingValues == 'set' && isMouseDown[1]))
                    ? 'visible'
                    : 'hidden',
              }}
            >
              {roundWithTolerance(
                (sliderLocations[1]
                  ? sliderLocations[1]
                  : defaultSliderLocations[1]) *
                  valueSize +
                  min,
                steps,
                tolerance,
                decimal
              )}
            </label>
          </span>
          {type != 'maxRange' && (
            <input
              type="range"
              min={0}
              max={10000}
              value={
                (sliderLocations[0]
                  ? sliderLocations[0]
                  : defaultSliderLocations[0]) * 10000
              }
              step={steps < 2 ? undefined : stepSize}
              disabled={disabled}
              onMouseDown$={$(() => !disabled && (isMouseDown[0] = true))}
              onMouseUp$={$(() => !disabled && (isMouseDown[0] = false))}
              onTouchStart$={$(() => !disabled && (isMouseDown[0] = true))}
              onTouchEnd$={$(() => !disabled && (isMouseDown[0] = false))}
              onChange$={() => {
                isMouseDown[0] = false

                0 >
                  (sliderLocations[0]
                    ? sliderLocations[0]
                    : defaultSliderLocations[0]) && (sliderLocations[0] = 0)
                ;(sliderLocations[0]
                  ? sliderLocations[0]
                  : defaultSliderLocations[0]) >
                  (sliderLocations[1]
                    ? sliderLocations[1]
                    : defaultSliderLocations[1]) &&
                  (sliderLocations[0] = sliderLocations[1])
              }}
            />
          )}
          {type != 'minRange' && (
            <input
              type="range"
              min={0}
              max={10000}
              value={
                (sliderLocations[1]
                  ? sliderLocations[1]
                  : defaultSliderLocations[1]) * 10000
              }
              step={steps < 2 ? undefined : stepSize}
              disabled={disabled}
              onMouseDown$={$(() => !disabled && (isMouseDown[1] = true))}
              onMouseUp$={$(() => {
                !disabled && (isMouseDown[1] = false)
              })}
              onTouchStart$={$(() => !disabled && (isMouseDown[1] = true))}
              onTouchEnd$={$(() => !disabled && (isMouseDown[1] = false))}
              onChange$={() => {
                isMouseDown[1] = false

                1 <
                  (sliderLocations[1]
                    ? sliderLocations[1]
                    : defaultSliderLocations[1]) && (sliderLocations[1] = 1)
                ;(sliderLocations[0]
                  ? sliderLocations[0]
                  : defaultSliderLocations[0]) >
                  (sliderLocations[1]
                    ? sliderLocations[1]
                    : defaultSliderLocations[1]) &&
                  (sliderLocations[1] = sliderLocations[0])
              }}
            />
          )}
        </div>
      </div>
    )
  }
)`,n=r(o(()=>e(()=>import("./q-DQw02aQ3.js"),[]),"s_9SNgOLm5YdY"));export{c as _auto_cssCode,s as _auto_tsCode,n as default};
