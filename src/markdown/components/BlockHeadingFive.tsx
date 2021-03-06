import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RenderElementProps } from 'slate-react'

type Props = RenderElementProps

export const BlockHeadingFive: FunctionComponent<Props> = ({
  children,
  attributes,
}) => {
  const classes = useStyles()

  return (
    <Typography
      component={'h5'}
      className={classes.root}
      variant={'h5'}
      {...attributes}
    >
      {children}
    </Typography>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return { root: { marginTop: spacing(4), marginBottom: spacing(4) } }
})
