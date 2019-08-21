import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RenderBlockProps } from 'slate-react'

type Props = RenderBlockProps

export const BlockHeadingOne: FunctionComponent<Props> = ({
  children,
  attributes
}) => {
  const classes = useStyles()

  return (
    <Typography
      component={'h1'}
      className={classes.root}
      variant={'h1'}
      {...attributes}
    >
      {children}
    </Typography>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return { root: { marginTop: spacing(4), marginBottom: spacing(4) } }
})
