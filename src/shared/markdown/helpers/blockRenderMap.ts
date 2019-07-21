import { Map } from 'immutable'

export const blockRenderMap = Map({
  'header-two': { element: 'h2' },
  section: { element: 'p' },
  unstyled: {
    element: 'div',
    aliasedElements: ['p']
  }
})
