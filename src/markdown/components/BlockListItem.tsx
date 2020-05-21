import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RenderElementProps } from 'slate-react'

type Props = RenderElementProps

export const BlockListItem: FunctionComponent<Props> = ({
  children,
  attributes,
}) => {
  const classes = useStyles()

  return (
    <li className={classes.root} {...attributes}>
      {children}
    </li>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: { fontWeight: 'bold' },
  }
})
