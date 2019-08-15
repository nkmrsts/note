import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RenderBlockProps } from 'slate-react'

type Props = RenderBlockProps

export const BlockNumberedList: FunctionComponent<Props> = ({
  children,
  attributes
}) => {
  const classes = useStyles()

  return (
    <ol className={classes.root} {...attributes}>
      {children}
    </ol>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {}
  }
})
