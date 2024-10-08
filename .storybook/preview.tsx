import { Parameters } from 'storybook-framework-qwik'

import '../src/styles/default-resources.css'
import '../src/styles/default-style.css'

export const parameters: Parameters = {
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  options: {
    showRoots: true,
  },
  docs: {
    iframeHeight: '200px',
  },
}
