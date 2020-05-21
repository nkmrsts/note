import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { RenderElementProps } from 'slate-react'

type Props = RenderElementProps

export const BlockCode: FunctionComponent<Props> = ({
  children,
  attributes,
}) => {
  const classes = useStyles()

  return (
    <pre className={classes.root} {...attributes}>
      <Typography className={classes.code} component={'code'}>
        {children}
      </Typography>
    </pre>
  )
}

const useStyles = makeStyles<Theme>(({ breakpoints, spacing }) => {
  return {
    root: {
      background: 'gray',
      borderRadius: 8,
      padding: spacing(1),
    },
    code: {
      color: 'white',
      fontFamily: 'Consolas, "Courier New", Courier, Monaco, monospace',
      fontSize: 14,
    },
  }
})
