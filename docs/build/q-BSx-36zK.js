import{_ as r}from "./q-DXM0pR1l.js";import{H as e,q as s}from "./q-8bdPC3mX.js";const o=`@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes circular-progress {
  0% {
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dashoffset: var(--dasharray);
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes linear-progress {
  0% {
    margin-left: 0%;
    width: 50%;
  }
  25% {
    margin-left: 50%;
    width: 50%;
  }
  50% {
    margin-left: 0%;
    width: 0%;
  }
  75% {
    margin-left: 50%;
    width: 50%;
  }
  100% {
    margin-left: 0%;
    width: 50%;
  }
}

.cc-progress-primary {
  color: var(--primary-0);
  background: var(--tertiary-2);
}

.cc-progress-success {
  color: var(--success-0);
  background: var(--success-2);
}

.cc-progress-error {
  color: var(--error-0);
  background: var(--error-2);
}

.cc-progress-warning {
  color: var(--warning-0);
  background: var(--warning-2);
}

.cc-progress-accent {
  color: var(--accent-0);
  background: var(--accent-2);
}

.cc-progress-circular {
  align-self: center;
  justify-self: center;
  position: absolute;
  margin: auto;
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  fill: currentColor;
  stroke: currentColor;
  background: unset;
}

.cc-progress-circular > text {
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  transform-origin: 50% 50%;
  transform: rotate(90deg);
  stroke: transparent;
  fill: currentColor;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.cc-progress-circular.cc-progress-infinite {
  animation: spin 2s linear infinite;
}

.cc-progress-circular.cc-progress-infinite > circle {
  animation: circular-progress 4s ease-in-out infinite;
  transform-origin: 50% 50%;
  transform: rotate(-90deg);
}

.cc-progress-linear {
  width: 100%;
  border-radius: var(--corner);
  overflow: hidden;
  display: inline-flex;
  position: relative;
}

.cc-progress-linear > div {
  height: 100%;
  background-color: currentColor;
  transition: width 0.3s ease-in-out;
}

.cc-progress-linear > spam {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  font-weight: bold;
  color: var(--secondary-0);
}

.cc-progress-linear.cc-progress-infinite > div {
  animation: linear-progress 4s ease-in-out infinite;
}`,a=`export interface ProgressProps {
  size?: number
  width?: number
  progress: number
  class?: string
  style?: CSSProperties
  type?: 'circular' | 'linear'
  color?: 'success' | 'error' | 'warning' | 'accent' | 'primary'
  variant?: 'infinite' | 'value' | 'withLabel'
}

export const Progress = component$<ProgressProps>(
  ({
    size = 100,
    width = 10,
    progress,
    class: className = undefined,
    style = {
      display: 'inline-flex',
      alignContent: 'center',
    },
    variant = 'infinite',
    type = 'circular',
    color = 'primary',
  }) => {
    const ref = useSignal<Element>()

    const center = size / 2
    const radius = center - width / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (progress / 100) * circumference

    useVisibleTask$(() => {
      if (ref.value) {
        // @ts-ignore
        ref.value.style.setProperty('--dasharray', \`\${circumference}\`)
      }
    })

    return (
      <div
        style={
          type == 'circular'
            ? { ...style, width: \`\${size}px\`, height: \`\${size}px\` }
            : style
        }
        class={className}
      >
        {type == 'circular' ? (
          <svg
            width={size}
            height={size}
            class={\`cc-progress-circular \${variant == 'infinite' && 'cc-progress-infinite'} cc-progress-\${color}\`}
          >
            {variant == 'withLabel' && (
              <text
                x="50%"
                y="50%"
                dy=".3em"
                text-anchor="middle"
                class="progress-text"
                font-size={(center - width) * 0.8}
              >
                {progress}%
              </text>
            )}
            <circle
              ref={ref}
              stroke-width={width}
              fill="none"
              cx={center}
              cy={center}
              r={radius}
              stroke-dasharray={circumference}
              stroke-dashoffset={offset}
            />
          </svg>
        ) : (
          <div
            class={\`cc-progress-linear \${variant == 'infinite' && 'cc-progress-infinite'} cc-progress-\${color}\`}
            style={{ height: width }}
          >
            {variant == 'withLabel' && (
              <spam style={{ fontSize: \`\${width}px\` }}>{progress}%</spam>
            )}
            <div style={{ width: \`\${progress}%\` }} />
          </div>
        )}
      </div>
    )
  }
)`,n=e(s(()=>r(()=>import("./q-BkAx_oaS.js"),[]),"s_gXRzqyXCJhg"));export{o as _auto_cssCode,a as _auto_tsCode,n as default};
