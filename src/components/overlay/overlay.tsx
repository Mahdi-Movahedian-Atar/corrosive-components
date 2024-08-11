import { $, component$, CSSProperties, Slot, useSignal } from '@builder.io/qwik'

export interface OverlayProps {
  open?: boolean
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  opacity?: number
  closeOnClick?: boolean
  class?: string
  style?: CSSProperties
}
export const Overlay = component$<OverlayProps>(
  ({
    class: className,
    style = {
      height: '100%',
      width: '100%',
      position: 'fixed',
      display: 'flex',
      inset: 0,
      zIndex: 99999,
    },
    open = false,
    color = 'primary',
    opacity = 0.5,
    closeOnClick = true,
  }) => {
    const isOpen = useSignal(false)

    return (
      <div
        class={className}
        style={isOpen.value != open ? style : { width: 0, height: 0 }}
        onClick$={$(() => closeOnClick && (isOpen.value = !isOpen.value))}
      >
        {isOpen.value != open && (
          <div
            class={`cc-overlay cc-overlay-${color}`}
            style={{ opacity: opacity }}
          />
        )}
        {isOpen.value != open && <Slot />}
      </div>
    )
  }
)
