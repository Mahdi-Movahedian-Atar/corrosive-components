import {
    $,
    component$,
    CSSProperties,
    QRL,
    Slot,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik'

export interface SelectProps {
    values?: { option: string; group: boolean }[]
    value?: string
    className?: string
    disabled?: boolean
    style?: CSSProperties
    color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
    variant?: 'solid' | 'outlined' | 'text'
    rounded?: boolean
    onChange?: QRL<(value: string) => void>
    raised?: boolean
    placeholder?: string
    floatingPlaceholder?: boolean
    maxHeight?: number
    direction?: 'down' | 'up' | 'left' | 'right'
}
export const Select = component$<SelectProps>(
    ({
        values,
        value,
        disabled,
        className,
        style = {
            height: 'fit-content',
            width: 'fit-content',
        },
        variant = 'outlined',
        color = 'primary',
        rounded = false,
        onChange,
        raised,
        placeholder,
        floatingPlaceholder = true,
        maxHeight = 100,
        direction = 'down',
    }) => {
        const ref = useSignal<Element>()
        const selectedOption = useSignal(value)
        const showOptions = useSignal(false)

        useVisibleTask$(({ track }) => {
            track(() => showOptions.value)
            const element = ref.value?.getBoundingClientRect()
            if (element == undefined) return
            const elementPosition = [
                element.bottom,
                element.top,
                element.left,
                element.right,
            ]
            if (direction == 'left' || direction == 'right') {
                elementPosition[0] += element.height / 2
                elementPosition[1] -= element.height / 2
            }
            if (elementPosition[0] > window.innerHeight) {
                // @ts-ignore
                ref.value.style.top = 'unset'
                // @ts-ignore
                ref.value.style.bottom = '0vh'
                // @ts-ignore
                ref.value.style.transform = 'unset'
            }
            if (elementPosition[1] < 0) {
                // @ts-ignore
                ref.value.style.bottom = 'unset'
                // @ts-ignore
                ref.value.style.top = '0vh'
                // @ts-ignore
                ref.value.style.transform = 'unset'
            }
            if (elementPosition[2] < 0) {
                // @ts-ignore
                ref.value.style.right = 'unset'
                // @ts-ignore
                ref.value.style.left = '0vh'
            }
            if (elementPosition[3] > window.innerWidth) {
                // @ts-ignore
                ref.value.style.left = 'unset'
                // @ts-ignore
                ref.value.style.right = '0vw'
            }
        })

        return (
            <div class={className} style={style}>
                <span
                    class={`cc-select-${variant} cc-select-${disabled ? 'disabled' : color} ${rounded ? 'cc-select-rounded' : 'cc-select'} ${raised && 'cc-select-raised'}`}
                >
                    <Slot name={'left'} />
                    <span
                        onClick$={$(() => {
                            if (disabled) return
                            showOptions.value = !showOptions.value
                        })}
                    >
                        <label>
                            {selectedOption.value
                                ? selectedOption.value
                                : placeholder}
                        </label>
                        <i
                            class={`${showOptions.value ? 'cc-shortArrow-down' : 'cc-shortArrow-left'} cc-icon-small`}
                        />
                    </span>
                    <div
                        class={`cc-select-items cc-select-${variant}`}
                        style={{
                            maxHeight,
                            bottom: direction == 'up' ? '100%' : 'unset',
                            top:
                                direction == 'down'
                                    ? '100%'
                                    : direction == 'left' ||
                                        direction == 'right'
                                      ? '50%'
                                      : 'unset',
                            left: direction == 'right' ? '100%' : 'unset',
                            right: direction == 'left' ? '100%' : 'unset',
                            transform:
                                direction == 'left' || direction == 'right'
                                    ? 'translateY(-50%)'
                                    : 'unset',
                        }}
                        hidden={!showOptions.value}
                        ref={ref}
                    >
                        {values?.map((option) =>
                            option.group ? (
                                <span>
                                    <b>{option.option}</b>
                                </span>
                            ) : (
                                <div
                                    onClick$={$(() => {
                                        selectedOption.value = option.option
                                        showOptions.value = false
                                        onChange && onChange(option.option)
                                    })}
                                >
                                    {option.option}
                                </div>
                            )
                        )}
                    </div>
                    <Slot name={'right'} />
                    {floatingPlaceholder && placeholder && (
                        <label
                            style={
                                selectedOption.value == undefined
                                    ? { visibility: 'hidden' }
                                    : {}
                            }
                            class={`cc-select-label cc-select-${disabled ? 'disabled' : color}`}
                        >
                            {placeholder}
                        </label>
                    )}
                </span>
            </div>
        )
    }
)
