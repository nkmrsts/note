import React, { FunctionComponent } from 'react'
import { RenderMarkProps } from 'slate-react'

type Props = RenderMarkProps

export const MarkBold: FunctionComponent<Props> = ({ children }) => {
  return <strong>{children}</strong>
}
