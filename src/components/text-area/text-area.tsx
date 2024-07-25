import {
    $,
    component$,
    CSSProperties,
    QRL,
    Slot,
    useSignal,
} from '@builder.io/qwik'

export interface TextAreaProps {
    value?: string
    className?: string
    disabled?: boolean
    cols?: number
    rows?: number
    resize?: 'horizontal' | 'vertical' | 'both' | 'none'
    maxLength?: number
    style?: CSSProperties
    color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
    variant?: 'solid' | 'outlined' | 'text'
    rounded?: boolean
    onChange?: QRL<(value: string | undefined) => void>
    raised?: boolean
    placeholder?: string
    floatingPlaceholder?: boolean
}
export const TextArea = component$<TextAreaProps>(
    ({
        value,
        disabled,
        className,
        style = {
            height: 'fit-content',
            width: 'fit-content',
        },
        cols = 20,
        rows = 2,
        resize = 'both',
        maxLength = undefined,
        variant = 'outlined',
        color = 'primary',
        rounded = false,
        onChange,
        raised,
        placeholder,
        floatingPlaceholder = true,
    }) => {
        const v = useSignal(value)

        return (
            <div class={className} style={style}>
                <spam
                    class={`cc-textarea-${variant} cc-textarea-${disabled ? 'disabled' : color} ${rounded ? 'cc-textarea-rounded' : 'cc-textarea'} ${raised && 'cc-textarea-raised'}`}
                >
                    <Slot name={'left'} />
                    <textarea
                        style={{ resize }}
                        disabled={disabled}
                        onChange$={$((e) => {
                            v.value = (e.target as any).value

                            onChange && onChange(v.value)
                        })}
                        placeholder={placeholder}
                        cols={cols}
                        rows={rows}
                        maxLength={maxLength}
                        value={v.value}
                    />
                    <Slot name={'right'} />
                    {floatingPlaceholder && placeholder && (
                        <label
                            class={`cc-textarea-label cc-textarea-${disabled ? 'disabled' : color}`}
                        >
                            {placeholder}
                        </label>
                    )}
                </spam>
            </div>
        )
    }
)
