import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

type Props = {
  preview: 0 | 1 | 2
}

const DivMarkdownEditor: FunctionComponent<Props> = ({ children, preview }) => {
  const classes = useStyles()

  return (
    <div
      className={classes.root}
      style={{ gridTemplateColumns: preview === 1 ? '1fr 1fr' : '1fr' }}
    >
      {children}
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: spacing(2)
    }
  }
})
export default DivMarkdownEditor
