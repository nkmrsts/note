import { Typography, Box } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const TextStrong: FunctionComponent = ({ children }) => {
  return (
    <Typography component="div">
      <Box fontWeight="fontWeightBold">{children}</Box>
    </Typography>
  )
}

export default TextStrong
