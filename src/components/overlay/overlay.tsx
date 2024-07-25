import { $, component$, CSSProperties, Slot, useSignal } from '@builder.io/qwik'

export interface OverlayProps {
    open?: boolean
    color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
    opacity?: number
    closeOnClick?: boolean
    className?: string
    style?: CSSProperties
}
export const Overlay = component$<OverlayProps>(
    ({
        className,
        style = {
            height: '100%',
            width: '100%',
            position: 'fixed',
        },
        open = false,
        color = 'primary',
        opacity = 0.5,
        closeOnClick = true,
    }) => {
        const isOpen = useSignal(open)

        return (
            <div
                class={className}
                style={style}
                onClick$={$(() => closeOnClick && (isOpen.value = false))}
            >
                {isOpen.value && (
                    <div
                        class={`cc-overlay cc-overlay-${color}`}
                        style={{ opacity: opacity }}
                    />
                )}
                {isOpen.value && <Slot />}
            </div>
        )
    }
)
