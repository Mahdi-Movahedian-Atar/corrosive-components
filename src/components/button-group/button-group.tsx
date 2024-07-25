import { component$, CSSProperties, QRL, Slot } from '@builder.io/qwik'

export interface ButtonMembers {
    id: number
    disabled?: boolean
    color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
    onClick?: QRL<() => void>
}

export interface ButtonGroupProps {
    members: ButtonMembers[]
    className?: string
    disabled?: boolean
    style?: CSSProperties
    variant?: 'solid' | 'outlined' | 'text'
    color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
    rounded?: boolean
    raised?: boolean
    vertical?: boolean
}
export const ButtonGroup = component$<ButtonGroupProps>(
    ({
        members,
        disabled,
        className,
        style = {
            height: 'fit-content',
            width: 'fit-content',
        },
        variant = 'solid',
        color = 'primary',
        rounded = false,
        raised,
        vertical,
    }) => {
        return (
            <div
                class={`${vertical ? 'cc-buttonGroup-vertical' : 'cc-buttonGroup-horizontal'} ${raised && 'cc-buttonGroup-raised'} ${rounded ? 'cc-buttonGroup-rounded' : 'cc-buttonGroup'} ${className}`}
                style={style}
            >
                {members.map((value) => {
                    const d = disabled || value.disabled

                    return (
                        <button
                            class={`${vertical ? 'cc-buttonGroup-vertical' : 'cc-buttonGroup-horizontal'} cc-buttonGroup-content-${d ? 'disabled' : value.color ? value.color : color} cc-buttonGroup-${variant}`}
                            onClick$={value.onClick}
                            disabled={d}
                        >
                            <Slot name={value.id.toString()} />
                        </button>
                    )
                })}
            </div>
        )
    }
)
