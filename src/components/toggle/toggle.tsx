import { $, component$, CSSProperties, QRL, useSignal } from '@builder.io/qwik'

export interface ToggleProps {
  class?: string
  value?: boolean
  disabled?: boolean
  style?: CSSProperties
  variant?: 'slider' | 'radio' | 'checkbox'
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  size?: number
  sizeType?: 'rem' | 'rm' | 'px' | string
  onChange?: QRL<(value: boolean) => void>
}

export const Toggle = component$<ToggleProps>(
  ({
    disabled,
    class: className,
    style,
    size = 2,
    sizeType = 'rem',
    variant = 'slider',
    color = 'primary',
    onChange,
    value,
  }) => {
    const v = useSignal<undefined | boolean>(undefined)

    return (
      <div style={style} class={className}>
        <div
          class={`cc-toggle-${variant} cc-toggle-${disabled ? 'disabled' : color}`}
          style={{
            height: `${size}` + sizeType,
            width: `${variant == 'slider' ? size * 2 : size}` + sizeType,
          }}
        >
          <input
            style={{ height: '100%', width: '100%' }}
            type={variant == 'slider' ? 'radio' : variant}
            onChange$={$(() => {
              v.value = v.value === undefined ? !value : !v.value
              onChange && onChange(v.value)
            })}
            checked={v.value === undefined ? value : v.value}
            disabled={disabled}
          />
          <span
            onClick$={$(() => {
              if (disabled) {
                return
              }
              v.value = v.value === undefined ? !value : !v.value
              onChange && onChange(v.value)
            })}
          ></span>
        </div>
      </div>
    )
  }
)
