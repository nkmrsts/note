import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { Value } from 'slate'
import Markdown from '../../shared/markdown/Markdown'

type Props = {
  inProgress: boolean
  setValue: Dispatch<SetStateAction<Value>>
  value: Value
}

const DivNoteEditor: FunctionComponent<Props> = ({
  inProgress,
  setValue,
  value
}) => {
  const classes = useStyles()

  return (
    <Typography className={classes.root} component={'div'}>
      <Markdown value={value} setValue={setValue} />
    </Typography>
  )
}
const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      '& *:first-of-type': { marginTop: '0' },
      background: 'rgba(0,0,0,0.06)',
      borderRadius: spacing(1),
      fontSize: '1rem',
      padding: spacing(2),
      wordBreak: 'break-word'
    }
  }
})

export default DivNoteEditor
