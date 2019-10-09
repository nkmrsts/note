import React from 'react'
import { Editor as CoreEditor } from 'slate'
import { RenderMarkProps } from 'slate-react'
import { MarkBold } from './MarkBold'
import { MarkItalic } from './MarkItalic'
import { MarkUnderlined } from './MarkUnderlined'

export const renderMark = (
  props: RenderMarkProps,
  editor: CoreEditor,
  next: () => any
) => {
  switch (props.mark.type) {
    case 'bold':
      return <MarkBold {...props} />
    case 'italic':
      return <MarkItalic {...props} />
    case 'underlined':
      return <MarkUnderlined {...props} />
    default:
      return next()
  }
}
