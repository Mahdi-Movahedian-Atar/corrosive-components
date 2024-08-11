import {
  component$,
  Slot,
  CSSProperties,
  useSignal,
  $,
  useStore,
  useVisibleTask$,
} from '@builder.io/qwik'

export interface ScrollPanelProps {
  class?: string
  style?: CSSProperties
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  direction?: 'vertical' | 'horizontal' | 'both'
}

export const ScrollPanel = component$<ScrollPanelProps>(
  ({
    class: className = undefined,
    style,
    color = 'primary',
    direction = 'both',
  }) => {
    const ref = useSignal<Element>()

    const vertical = useStore([0, 0])
    const horizontal = useStore([0, 0])
    const start = useStore([0, 0])

    const isVerticalActive = useSignal(false)
    const isHorizontalActive = useSignal(false)

    const onScroll = $(() => {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
        scrollLeft,
        scrollWidth,
        clientWidth,
      } = ref.value as HTMLDivElement
      vertical[0] = clientHeight / scrollHeight
      vertical[1] = scrollTop / (scrollHeight - clientHeight)
      horizontal[0] = clientWidth / scrollWidth
      horizontal[1] = scrollLeft / (scrollWidth - clientWidth)
    })

    const manualScroll = $((e: MouseEvent | TouchEvent) => {
      if (isVerticalActive.value) {
        let deltaY =
          ('clientY' in e ? e.clientY : e.touches[0].clientY) - start[0]
        deltaY /= vertical[0]
        ;(ref.value as HTMLDivElement).scrollBy({
          top: deltaY,
          behavior: 'instant',
        })
        start[0] = 'clientY' in e ? e.clientY : e.touches[0].clientY
      }
      if (isHorizontalActive.value) {
        let deltaX =
          ('clientX' in e ? e.clientX : e.touches[0].clientX) - start[1]
        deltaX /= horizontal[0]
        ;(ref.value as HTMLDivElement).scrollBy({
          left: deltaX,
          behavior: 'instant',
        })
        start[1] = 'clientX' in e ? e.clientX : e.touches[0].clientX
      }
    })

    const activeHorizontal = $((e: MouseEvent | TouchEvent) => {
      isHorizontalActive.value = true
      start[1] = 'clientX' in e ? e.clientX : e.touches[0].clientX
    })
    const deActiveHorizontal = $(() => (isHorizontalActive.value = false))
    const activeVertical = $((e: MouseEvent | TouchEvent) => {
      isVerticalActive.value = true
      start[0] = 'clientY' in e ? e.clientY : e.touches[0].clientY
    })
    const deActiveVertical = $(() => (isVerticalActive.value = false))

    useVisibleTask$(({ track }) => {
      track(() => ref.value)
      onScroll()
    })

    return (
      <div class={className} style={style}>
        <div class={`cc-scrollPanel cc-scrollPanel-${color}`}>
          <div class={`cc-scrollPanel-parent`}>
            <div
              ref={ref}
              class={`cc-scrollPanel-wrapper`}
              style={{
                overflowX: direction != 'vertical' ? 'scroll' : 'hidden',
                overflowY: direction != 'horizontal' ? 'scroll' : 'hidden',
              }}
              onScroll$={onScroll}
            >
              <Slot />
            </div>
            {direction != 'horizontal' && (
              <div
                onMouseMove$={manualScroll}
                onMouseDown$={activeVertical}
                onMouseUp$={deActiveVertical}
                onMouseLeave$={deActiveVertical}
                onTouchStart$={activeVertical}
                onTouchEnd$={deActiveVertical}
                onTouchMove$={manualScroll}
                class={`cc-scrollPanel-bar-v`}
              >
                <span
                  style={{
                    height: `${vertical[0] * 100}%`,
                    top: `${(1 - vertical[0]) * vertical[1] * 100}%`,
                  }}
                />
              </div>
            )}
          </div>
          {direction != 'vertical' && (
            <div
              onMouseMove$={manualScroll}
              onMouseDown$={activeHorizontal}
              onMouseUp$={deActiveHorizontal}
              onMouseLeave$={deActiveHorizontal}
              onTouchStart$={activeHorizontal}
              onTouchEnd$={deActiveHorizontal}
              onTouchMove$={manualScroll}
              class={`cc-scrollPanel-bar-h`}
            >
              <span
                style={{
                  width: `${horizontal[0] * 100}%`,
                  left: `${(1 - horizontal[0]) * horizontal[1] * 100}%`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
)
