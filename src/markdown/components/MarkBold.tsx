import React, { FunctionComponent } from 'react'
import { RenderLeafProps } from 'slate-react'

type Props = RenderLeafProps

export const MarkBold: FunctionComponent<Props> = ({ children }) => {
  return <strong>{children}</strong>
}
