import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RenderBlockProps } from 'slate-react'

type Props = RenderBlockProps

export const BlockHeadingTwo: FunctionComponent<Props> = ({
  children,
  attributes
}) => {
  const classes = useStyles()

  return (
    <Typography component={'h2'} className={classes.root} {...attributes}>
      {children}
    </Typography>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {}
  }
})
