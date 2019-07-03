import { TextField, makeStyles, Theme } from '@material-ui/core'
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
  const classes = useStyles()
  return (
    <TextField
      className={classes.root}
      disabled={inProgress}
      fullWidth
      //label={'タイトル'}
      multiline
      onChange={e => setTitle(e.target.value)}
      value={title}
    />
  )
}

const useStyles = makeStyles<Theme>(() => {
  return {
    root: {
      '& textarea': {
        fontSize: '2.125rem',
        fontWeight: 400,
        lineHeight: '1.17'
      }
    }
  }
})

export default TextFieldTitle
