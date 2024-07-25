import { $, component$, CSSProperties, QRL, useSignal } from '@builder.io/qwik'

export interface ToggleProps {
    className?: string
    value?: boolean
    disabled?: boolean
    style?: CSSProperties
    variant?: 'slider' | 'radio' | 'checkbox'
    color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
    onChange?: QRL<(value: boolean) => void>
}
export const Toggle = component$<ToggleProps>(
    ({
        disabled,
        className,
        style = {
            height: '100%',
            width: '100%',
        },
        variant = 'slider',
        color = 'primary',
        onChange,
        value,
    }) => {
        const v = useSignal(value)

        return (
            <div style={style} class={className}>
                <div
                    class={`cc-toggle-${variant} cc-toggle-${disabled ? 'disabled' : color}`}
                >
                    <input
                        style={{ height: '100%', width: '100%' }}
                        type={variant == 'slider' ? 'radio' : variant}
                        onChange$={$(() => {
                            v.value = !v.value
                            onChange && onChange(v.value)
                        })}
                        checked={v.value}
                        disabled={disabled}
                    />
                    <span
                        onClick$={$(() => {
                            if (disabled) {
                                return
                            }
                            v.value = !v.value
                            onChange && onChange(v.value)
                        })}
                    ></span>
                </div>
            </div>
        )
    }
)
