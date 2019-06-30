import { TextField } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

type Props = {
  inProgress: boolean
  setTitle: (title: string) => void
  title: string
}

const TextFieldTitle: FunctionComponent<Props> = ({
  inProgress,
  setTitle,
  title
}) => {
  return (
    <TextField
      disabled={inProgress}
      fullWidth
      label={'タイトル'}
      multiline
      onChange={e => setTitle(e.target.value)}
      value={title}
    />
  )
}

export default TextFieldTitle
