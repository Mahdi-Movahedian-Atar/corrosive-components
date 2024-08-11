import { component$, CSSProperties, QRL, Slot } from '@builder.io/qwik'

export interface ButtonProps {
  class?: string
  disabled?: boolean
  style?: CSSProperties
  variant?: 'solid' | 'outlined' | 'text'
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  rounded?: boolean
  onClick?: QRL<() => any>
  raised?: boolean
}
export const Button = component$<ButtonProps>(
  ({
    disabled,
    class: className,
    style,
    variant = 'solid',
    color = 'primary',
    rounded = false,
    onClick,
    raised,
  }) => {
    return (
      <div class={className} style={style}>
        <button
          style={{ height: '100%', width: '100%' }}
          class={`cc-button-${variant} cc-button-${disabled ? 'disabled' : color} ${rounded ? 'cc-button-rounded' : 'cc-button'} ${raised && 'cc-button-raised'}`}
          disabled={disabled}
          onClick$={onClick}
        >
          <Slot />
        </button>
      </div>
    )
  }
)
