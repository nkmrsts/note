import React, { FunctionComponent } from 'react'
import { RenderMarkProps } from 'slate-react'

type Props = RenderMarkProps

export const MarkUnderlined: FunctionComponent<Props> = ({ children }) => {
  return <u>{children}</u>
}
