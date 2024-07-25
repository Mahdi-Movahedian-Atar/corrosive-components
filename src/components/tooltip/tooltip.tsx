import {
    $,
    component$,
    CSSProperties,
    implicit$FirstArg,
    QRL,
    Slot,
    useSignal,
} from '@builder.io/qwik'

export interface TooltipProps {
    isActive?: boolean
    disabled?: boolean
    position?: 'top' | 'right' | 'bottom' | 'left'
    delay?: number
    className?: string
    style?: CSSProperties
    color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
    variant?: 'solid' | 'outlined' | 'text'
}

export function delayQrl<T>(fn: QRL<() => T>, delayInMs: number): Promise<T> {
    return new Promise((res) => {
        setTimeout(() => {
            res(fn())
        }, delayInMs)
    })
}

export const delay$ = implicit$FirstArg(delayQrl)
export const Tooltip = component$<TooltipProps>(
    ({
        isActive = false,
        disabled = false,
        position = 'top',
        delay = 0,
        className = undefined,
        style = { height: 'fit-content', width: 'fit-content' },
        variant = 'outlined',
        color = 'primary',
    }) => {
        const visible = useSignal(false)

        const showTooltip = $(() => {
            !disabled &&
                delay$(() => {
                    visible.value = true
                }, delay)
        })

        const hideTooltip = $(() => {
            !disabled &&
                delay$(() => {
                    visible.value = false
                }, delay)
        })

        return (
            <span
                style={style}
                class={className}
                onMouseEnter$={showTooltip}
                onMouseLeave$={hideTooltip}
            >
                <Slot />
                {(isActive || visible.value) && (
                    <div
                        class={`cc-tooltip cc-tooltip-${position} cc-tooltip-${disabled ? 'disabled' : color} cc-tooltip-${variant}`}
                    >
                        <Slot name={'content'} />
                    </div>
                )}
            </span>
        )
    }
)
