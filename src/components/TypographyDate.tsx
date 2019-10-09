import { Typography } from '@material-ui/core'
import { firestore } from 'firebase/app'
import React, { FunctionComponent } from 'react'
import { toDateText } from '../helpers/toDateText'

type Props = { timestamp: firestore.Timestamp | null }

const TypographyDate: FunctionComponent<Props> = ({ timestamp }) => {
  return (
    <Typography component={'span'} variant={'caption'}>
      {timestamp === null ? '更新中...' : toDateText(timestamp)}
    </Typography>
  )
}

export default TypographyDate
