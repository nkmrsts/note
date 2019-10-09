import React, { FunctionComponent } from 'react'
import { RenderMarkProps } from 'slate-react'

type Props = RenderMarkProps

export const MarkItalic: FunctionComponent<Props> = ({ children }) => {
  return <em>{children}</em>
}
