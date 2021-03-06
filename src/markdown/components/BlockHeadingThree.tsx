import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RenderElementProps } from 'slate-react'

type Props = RenderElementProps

export const BlockHeadingThree: FunctionComponent<Props> = ({
  children,
  attributes,
}) => {
  const classes = useStyles()

  return (
    <Typography
      component={'h3'}
      className={classes.root}
      variant={'h3'}
      {...attributes}
    >
      {children}
    </Typography>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return { root: { marginTop: spacing(4), marginBottom: spacing(4) } }
})
