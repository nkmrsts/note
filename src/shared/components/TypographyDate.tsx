import { Typography } from '@material-ui/core'
import { firestore } from 'firebase/app'
import React, { FunctionComponent } from 'react'
import { toDateText } from '../../shared/helpers/toDateText'

type Props = { timestamp: firestore.Timestamp }

const TypographyDate: FunctionComponent<Props> = ({ timestamp }) => {
  return (
    <Typography component={'span'} variant={'caption'}>
      {toDateText(timestamp)}
    </Typography>
  )
}

export default TypographyDate
