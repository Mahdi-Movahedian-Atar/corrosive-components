import{_ as t}from"./q-uemlvruI.js";import{H as o,q as e}from"./q-8bdPC3mX.js";const n=`.cc-toast-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}

.cc-toast {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  height: max-content;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: var(--corner);
  border: solid var(--width);
  font-family: Arial, sans-serif;
}

.cc-toast-primary {
  background: var(--primary-0);
  border-color: var(--primary-0);
  color: var(--primary-0);
}

.cc-toast-success {
  background: var(--success-0);
  border-color: var(--success-0);
  color: var(--success-0);
}

.cc-toast-error {
  background: var(--error-0);
  border-color: var(--error-0);
  color: var(--error-0);
}

.cc-toast-warning {
  background: var(--warning-0);
  border-color: var(--warning-0);
  color: var(--warning-0);
}

.cc-toast-accent {
  background: var(--accent-0);
  border-color: var(--accent-0);
  color: var(--accent-0);
}

.cc-toast-solid {
  color: var(--secondary-0);
}
.cc-toast-outlined {
  background: transparent;
}
.cc-toast-text {
  background: transparent;
  border-color: transparent;
}

.cc-toast button {
  background: transparent;
  border-color: transparent;
  color: currentColor;
  cursor: pointer;
}`,r=`//Interfaces===============================================================================================

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
    color: 'success' | 'error' | 'warning' | 'accent' | 'primary' = 'primary',
    variant: 'solid' | 'outlined' | 'text' = 'solid',
    duration?: number
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
      class={\`cc-toast cc-toast-\${toastMessage.color} cc-toast-\${toastMessage.variant}\`}
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
          class={\`cc-icon-medium \${toastMessage.color == 'success' ? 'cc-success' : toastMessage.color == 'error' ? 'cc-error' : toastMessage.color == 'warning' ? 'cc-warning' : 'cc-info'}\`}
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
          top: alignY == 'top' ? '0' : alignY == 'center' ? '50%' : 'unset',
          bottom: alignY == 'top' ? 'unset' : alignY == 'center' ? '50%' : '0',
          left: alignX == 'left' ? '0' : alignX == 'center' ? '50%' : 'unset',
          right: alignX == 'left' ? 'unset' : alignX == 'center' ? '50%' : '0',
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
`,c=o(e(()=>t(()=>import("./q-mkRhpdh5.js"),[]),"s_GTleDLQYHFQ"));export{n as _auto_cssCode,r as _auto_tsCode,c as default};
