import {
    component$,
    useStore,
    $,
    useOn,
    useSignal,
    Slot,
    CSSProperties,
    QRL,
} from '@builder.io/qwik'

export interface ResizablePanelsProps {
    disabled?: boolean
    vertical?: boolean
    onChange?: QRL<(offset: number) => void>
    min?: number
    max?: number
    defaultOffset?: number
    collapsableLeft?: number
    collapsableRight?: number
    className?: string
    style?: CSSProperties
}

export const ResizablePanels = component$<ResizablePanelsProps>(
    ({
        disabled = false,
        vertical = false,
        min = 5,
        max = 95,
        className = undefined,
        style = { height: '100%', width: '100%' },
        defaultOffset = 50,
        collapsableLeft = 0,
        collapsableRight = 100,
        onChange = undefined,
    }) => {
        const mousePosition = useStore({
            x: defaultOffset,
            y: defaultOffset,
        })
        const isMouseDown = useSignal(false)
        const thisRef = useSignal<Element>()

        const mouseMove = $((event: Event) => {
            isMouseDown.value && event.preventDefault()
            const rect = thisRef.value!.getBoundingClientRect()
            isMouseDown.value &&
            (mousePosition.x +=
                ((event as MouseEvent).movementX / rect.width) * 100)
            isMouseDown.value &&
            (mousePosition.y +=
                ((event as MouseEvent).movementY / rect.height) * 100)
            min && mousePosition.x < min && (mousePosition.x = min)
            max && mousePosition.x > max && (mousePosition.x = max)
            min && mousePosition.y < min && (mousePosition.y = min)
            max && mousePosition.y > max && (mousePosition.y = max)
            onChange &&
            (vertical
                ? onChange(mousePosition.y)
                : onChange(mousePosition.x))
        })
        const TouchMove = $((event: TouchEvent) => {
            const rect = thisRef.value!.getBoundingClientRect()
            isMouseDown.value && event.preventDefault()
            if (event.touches.length == 0) isMouseDown.value = false
            isMouseDown.value &&
            (mousePosition.x =
                ((event.touches[0].clientX - rect.left) / rect.width) *
                100)
            isMouseDown.value &&
            (mousePosition.y =
                ((event.touches[0].clientY - rect.top) / rect.height) *
                100)
            min && mousePosition.x < min && (mousePosition.x = min)
            max && mousePosition.x > max && (mousePosition.x = max)
            min && mousePosition.y < min && (mousePosition.y = min)
            max && mousePosition.y > max && (mousePosition.y = max)
            onChange &&
            (vertical
                ? onChange(mousePosition.y)
                : onChange(mousePosition.x))
        })
        const disableMouse = $(() => {
            !disabled && (isMouseDown.value = false)
        })
        const enableMouse = $(() => {
            !disabled && (isMouseDown.value = true)
        })

        useOn('mousemove', mouseMove)
        useOn('touchmove', TouchMove)
        useOn('mouseup', disableMouse)
        useOn('touchend', disableMouse)

        return (
            <div style={style} class={className} ref={thisRef}>
                <div
                    class={
                        vertical
                            ? 'cc-resizablePanels-parent-vertical'
                            : 'cc-resizablePanels-parent'
                    }
                >
                    <div
                        style={
                            vertical
                                ? !(collapsableLeft > mousePosition.y)
                                    ? mousePosition.y > collapsableRight
                                        ? 'height: 100%'
                                        : `height: ${mousePosition.y}%`
                                    : 'display: none'
                                : !(collapsableLeft > mousePosition.x)
                                  ? mousePosition.x > collapsableRight
                                      ? 'width: 100%'
                                      : `width: ${mousePosition.x}%`
                                  : 'display: none'
                        }
                        class={`cc-resizablePanels-firstPanel`}
                    >
                        <Slot name="firstPanel" />
                    </div>
                    <span
                        class={
                            !disabled
                                ? vertical
                                    ? 'cc-resizablePanels-draggable-vertical'
                                    : 'cc-resizablePanels-draggable'
                                : vertical
                                  ? 'cc-resizablePanels-vertical-disabled'
                                  : 'cc-resizablePanels-disabled'
                        }
                        onMouseDown$={enableMouse}
                        onMouseUp$={disableMouse}
                        onTouchStart$={enableMouse}
                        onTouchEnd$={disableMouse}
                    >
                        <div
                            class={
                                vertical
                                    ? 'cc-resizablePanels-content-vertical'
                                    : 'cc-resizablePanels-content'
                            }
                        />
                    </span>
                    <div
                        style={
                            vertical
                                ? mousePosition.y > collapsableRight
                                    ? 'display: none'
                                    : !(collapsableLeft > mousePosition.y)
                                      ? `height: ${100 - mousePosition.y}%`
                                      : 'height: 100%'
                                : mousePosition.x > collapsableRight
                                  ? 'display: none'
                                  : !(collapsableLeft > mousePosition.x)
                                    ? `width: ${100 - mousePosition.x}%`
                                    : 'height: 100%'
                        }
                        class={'cc-resizablePanels-secondPanel'}
                    >
                        <Slot name="secondPanel" />
                    </div>
                </div>
            </div>
        )
    }
)
