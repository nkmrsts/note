import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

type Props = { primary: string }

const TypographyTitle: FunctionComponent<Props> = ({ primary }) => {
  const classes = useStyles()

  return (
    <Typography className={classes.root} component={'h1'} variant={'h5'}>
      {primary}
    </Typography>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      fontWeight: 'bold'
    }
  }
})

export default TypographyTitle
