import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const ImgLogo: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <img
      alt={'noat'}
      className={classes.root}
      src={'/assets/images/noat.png'}
    />
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      width: spacing(20)
    }
  }
})

export default ImgLogo
