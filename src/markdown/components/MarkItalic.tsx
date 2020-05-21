import React, { FunctionComponent } from 'react'
import { RenderLeafProps } from 'slate-react'

type Props = RenderLeafProps

export const MarkItalic: FunctionComponent<Props> = ({ children }) => {
  return <em>{children}</em>
}
