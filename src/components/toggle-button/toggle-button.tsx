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
    className?: string
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
        className,
        style = {
            height: 'fit-content',
            width: 'fit-content',
        },
        color = 'primary',
        rounded = false,
        onChange,
        raised,
    }) => {
        const v = useSignal(value)

        return (
            <div class={className} style={style}>
                <button
                    style={{ height: '100%', width: '100%' }}
                    class={`cc-button-${v.value ? 'solid' : 'outlined'} cc-button-${disabled ? 'disabled' : color} ${rounded ? 'cc-button-rounded' : 'cc-button'} ${raised && 'cc-button-raised'}`}
                    disabled={disabled}
                    onClick$={$(() => {
                        v.value = !v.value
                        onChange && onChange(v.value)
                    })}
                >
                    <Slot />
                </button>
            </div>
        )
    }
)
