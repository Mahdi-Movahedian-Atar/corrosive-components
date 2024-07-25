import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { AddToast, Toast, ToastProps, ToastContext } from './toast'
import { $, component$, useContextProvider, useSignal } from '@builder.io/qwik'
import { Button } from '../button/button'

const Test = component$<ToastProps>(({ alignX, alignY }) => {
    const toasts = useSignal<any>([])
    useContextProvider(ToastContext, toasts)

    return (
        <div style={{ padding: '20px', display: 'flex' }}>
            <h1>Toast Notification Example</h1>
            <Toast alignX={alignX} alignY={alignY}></Toast>
            <div>
                <Button
                    onClick={$(
                        async () =>
                            (toasts.value = await AddToast(
                                toasts.value,
                                'Primary Message',
                                'primary',
                                'solid',
                                1500
                            ))
                    )}
                >
                    Accent Info
                </Button>
                <Button
                    onClick={$(
                        async () =>
                            (toasts.value = await AddToast(
                                toasts.value,
                                'Success Message',
                                'success',
                                'outlined',
                                1500
                            ))
                    )}
                >
                    Show Success
                </Button>
                <Button
                    onClick={$(
                        async () =>
                            (toasts.value = await AddToast(
                                toasts.value,
                                'Error Message',
                                'error',
                                'text',
                                1500
                            ))
                    )}
                >
                    Show Error
                </Button>
                <Button
                    onClick={$(
                        async () =>
                            (toasts.value = await AddToast(
                                toasts.value,
                                'Warning Message',
                                'warning',
                                'solid',
                                1500
                            ))
                    )}
                >
                    Show Info
                </Button>
                <Button
                    onClick={$(
                        async () =>
                            (toasts.value = await AddToast(
                                toasts.value,
                                'Accent Message',
                                'accent',
                                'outlined',
                                1500
                            ))
                    )}
                >
                    Accent Info
                </Button>
            </div>
        </div>
    )
})

const meta: Meta<ToastProps> = {
    component: Test,
}

type Story = StoryObj<ToastProps>

export default meta

export const Primary: Story = {
    args: {
        alignX: 'right',
        alignY: 'top',
    },
    argTypes: {
        alignX: {
            options: ['left', 'center', 'right'],
            control: { type: 'radio' },
        },
        alignY: {
            options: ['top', 'center', 'bottom'],
            control: { type: 'radio' },
        },
    },
    // @ts-ignore
    render: (props) => <Test {...props} />,
}
