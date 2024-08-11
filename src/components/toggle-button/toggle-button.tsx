import {
  $,
  component$,
  CSSProperties,
  QRL,
  Slot,
  useSignal,
} from '@builder.io/qwik'

export interface ToggleButtonProps {
  value?: boolean
  class?: string
  disabled?: boolean
  style?: CSSProperties
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  rounded?: boolean
  onChange?: QRL<(value: boolean) => void>
  raised?: boolean
}
export const ToggleButton = component$<ToggleButtonProps>(
  ({
    value = false,
    disabled,
    class: className,
    style,
    color = 'primary',
    rounded = false,
    onChange,
    raised,
  }) => {
    const v = useSignal<undefined | boolean>(undefined)

    return (
      <div class={className} style={style}>
        <button
          style={{ height: '100%', width: '100%' }}
          class={`cc-button-${(v.value == undefined && value) || v.value ? 'solid' : 'outlined'} cc-button-${disabled ? 'disabled' : color} ${rounded ? 'cc-button-rounded' : 'cc-button'} ${raised && 'cc-button-raised'}`}
          disabled={disabled}
          onClick$={$(() => {
            v.value = v.value == undefined ? !value : !v.value
            onChange && onChange(v.value)
          })}
        >
          <Slot />
        </button>
      </div>
    )
  }
)
