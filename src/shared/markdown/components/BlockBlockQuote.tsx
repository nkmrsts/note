import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RenderBlockProps } from 'slate-react'

type Props = RenderBlockProps

export const BlockBlockQuote: FunctionComponent<Props> = ({
  children,
  attributes
}) => {
  const classes = useStyles()

  return (
    <blockquote className={classes.root} {...attributes}>
      <Typography className={classes.typography} component={'code'}>
        {children}
      </Typography>
    </blockquote>
  )
}

const useStyles = makeStyles<Theme>(({ palette, spacing }) => {
  return {
    root: {
      background: 'rgba(0, 0, 0, 0.08)',
      margin: 0,
      paddingBottom: spacing(2),
      paddingLeft: spacing(2),
      paddingTop: spacing(2),
      borderRadius: 16
    },
    typography: {}
  }
})
