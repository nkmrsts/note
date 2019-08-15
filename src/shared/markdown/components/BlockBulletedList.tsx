import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RenderBlockProps } from 'slate-react'

type Props = RenderBlockProps

export const BlockBulletedList: FunctionComponent<Props> = ({
  children,
  attributes
}) => {
  const classes = useStyles()

  return (
    <ul className={classes.root} {...attributes}>
      {children}
    </ul>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {}
  }
})
