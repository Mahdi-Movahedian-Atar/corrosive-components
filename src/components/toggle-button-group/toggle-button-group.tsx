import {
  $,
  component$,
  CSSProperties,
  QRL,
  Slot,
  useStore,
  useTask$,
} from '@builder.io/qwik'

export interface ToggleButtonMembers {
  id: number
  disabled?: boolean
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  value?: boolean
  onChange?: QRL<(value: boolean) => void>
}

export interface ToggleButtonGroupProps {
  members: ToggleButtonMembers[]
  class?: string
  disabled?: boolean
  style?: CSSProperties
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  rounded?: boolean
  raised?: boolean
  vertical?: boolean
  exclusive?: boolean
}
export const ToggleButtonGroup = component$<ToggleButtonGroupProps>(
  ({
    members,
    disabled,
    class: className,
    style,
    color = 'primary',
    rounded = false,
    raised,
    vertical,
    exclusive = false,
  }) => {
    const values: { [key: number]: boolean | undefined } = useStore({})

    useTask$(async () => {
      members.map((value) => {
        values[value.id] = undefined
      })
    })

    return (
      <div
        class={`${vertical ? 'cc-buttonGroup-vertical' : 'cc-buttonGroup-horizontal'} ${raised && 'cc-buttonGroup-raised'} ${rounded ? 'cc-buttonGroup-rounded' : 'cc-buttonGroup'} ${className}`}
        style={style}
      >
        {members.map((value) => {
          const d = disabled || value.disabled
          return (
            <button
              class={`cc-buttonGroup-${(values[value.id] == undefined && value.value) || values[value.id] ? 'solid' : 'outlined'} ${vertical ? 'cc-buttonGroup-vertical' : 'cc-buttonGroup-horizontal'} cc-buttonGroup-content-${d ? 'disabled' : value.color ? value.color : color}`}
              onClick$={$(() => {
                if (exclusive) {
                  for (const key in values) {
                    values[key] = false
                  }
                }
                values[value.id] =
                  values[value.id] == undefined
                    ? !value.value
                    : !values[value.id]
                // @ts-ignore
                value.onChange && value.onChange(values[value.id])
              })}
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
