import { ContentBlock } from 'draft-js'
import { createElement } from 'react'

export const blockRendererFn = (contentBlock: ContentBlock) => {
  const type = contentBlock.getType()
  if (type === 'atomic') {
    return {
      component: createElement('div'),
      editable: false
    }
  }
}
