import { Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

const TypographyNotFound: FunctionComponent = () => {
  return (
    <Typography>
      {'このノートは存在しないか非公開に設定されています。'}
    </Typography>
  )
}

export default TypographyNotFound
