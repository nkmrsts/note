import { CircularProgress, makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const DivProgress: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      justifyContent: 'center',
      paddingTop: spacing(4)
    }
  }
})

export default DivProgress
