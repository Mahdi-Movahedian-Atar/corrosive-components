import {
    $,
    Component,
    component$,
    createContextId,
    QRL,
    Signal,
    useContext,
    useContextProvider,
    useTask$,
} from '@builder.io/qwik'

//Interfaces===============================================================================================

export interface ToastMessage {
    message: string
    variant?: 'solid' | 'outlined' | 'text'
    color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
    duration?: number
}

export interface ToastProps {
    contentComponent?: Component<{ toastMessage: ToastMessage }>
    alignX?: 'left' | 'center' | 'right'
    alignY?: 'top' | 'center' | 'bottom'
}

interface ToastContentProps {
    id: string
    toastMessage: ToastMessage
}

//Context===============================================================================================

export const ToastContext =
    createContextId<Signal<ToastContentProps[]>>('corrosive_toast')

//Functions===============================================================================================

export const AddToast = $(
    (
        toasts: ToastContentProps[],
        message: string,
        color:
            | 'success'
            | 'error'
            | 'warning'
            | 'accent'
            | 'primary' = 'primary',
        variant: 'solid' | 'outlined' | 'text' = 'solid',
        duration: number = 1500
    ) => {
        const id = new Date().getTime().toString()
        const toastMessage: ToastMessage = { message, color, variant, duration }
        return [...toasts, { id, toastMessage }]
    }
)

//Components===============================================================================================

const ToastContent = component$<{
    toastContentProps: ToastContentProps
    ContentComponent: any
    onClose: QRL
}>(({ toastContentProps: { toastMessage, id }, ContentComponent, onClose }) => {
    useTask$(() => {
        const timer = setTimeout(
            () => {
                onClose(id)
            },
            toastMessage.duration ? toastMessage.duration : 1000
        )

        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <div
            class={`cc-toast cc-toast-${toastMessage.color} cc-toast-${toastMessage.variant}`}
        >
            <ContentComponent {...toastMessage} />
            <button onClick$={$(() => onClose(id))}>
                <i class={'cc-icon-small cc-cross'} />
            </button>
        </div>
    )
})

export const Toast = component$<ToastProps>(
    ({
        contentComponent = $((toastMessage: ToastMessage) => (
            <div
                style={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}
            >
                <i
                    style={{ margin: 'auto' }}
                    class={`cc-icon-medium ${toastMessage.color == 'success' ? 'cc-success' : toastMessage.color == 'error' ? 'cc-error' : toastMessage.color == 'warning' ? 'cc-warning' : 'cc-info'}`}
                />
                <p
                    style={{
                        margin: 'auto',
                        width: '10rem',
                        marginLeft: '0.5rem',
                    }}
                >
                    {toastMessage.message}
                </p>
            </div>
        )),
        alignX = 'right',
        alignY = 'top',
    }) => {
        const toasts: Signal<ToastContentProps[]> = useContext(ToastContext)
        useContextProvider(ToastContext, toasts)

        const removeToast: QRL = $(
            (id: string) =>
                (toasts.value = toasts.value.filter((toast) => toast.id !== id))
        )

        return (
            <div
                class={'cc-toast-container'}
                style={{
                    top:
                        alignY == 'top'
                            ? '0'
                            : alignY == 'center'
                              ? '50%'
                              : 'unset',
                    bottom:
                        alignY == 'top'
                            ? 'unset'
                            : alignY == 'center'
                              ? '50%'
                              : '0',
                    left:
                        alignX == 'left'
                            ? '0'
                            : alignX == 'center'
                              ? '50%'
                              : 'unset',
                    right:
                        alignX == 'left'
                            ? 'unset'
                            : alignX == 'center'
                              ? '50%'
                              : '0',
                }}
            >
                {toasts.value.map((toast) => (
                    <ToastContent
                        key={toast.id}
                        toastContentProps={toast}
                        ContentComponent={contentComponent}
                        onClose={removeToast}
                    />
                ))}
            </div>
        )
    }
)
