import { Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const TypographyHeadingOne: FunctionComponent = ({ children }) => {
  return (
    <Typography component={'h1'} variant={'h3'}>
      {children}
    </Typography>
  )
}

export default TypographyHeadingOne
