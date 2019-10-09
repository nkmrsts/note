import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RenderBlockProps } from 'slate-react'

type Props = RenderBlockProps

export const BlockParagraph: FunctionComponent<Props> = ({
  children,
  attributes
}) => {
  const classes = useStyles()

  return (
    <Typography component={'p'} className={classes.root} {...attributes}>
      {children}
    </Typography>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing, typography }) => {
  return {
    root: {
      marginTop: spacing(1),
      marginBottom: spacing(1),
      lineHeight: typography.body2.lineHeight
    }
  }
})
