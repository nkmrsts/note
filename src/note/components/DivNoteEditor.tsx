import { makeStyles, Theme } from '@material-ui/core'
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
    <div className={classes.root}>
      <Markdown value={value} setValue={setValue} />
    </div>
  )
}
const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      '& *:first-of-type': { marginTop: '0' },
      background: 'rgba(0,0,0,0.06)',
      borderRadius: spacing(1),
      padding: spacing(2),
      wordBreak: 'break-word'
    }
  }
})

export default DivNoteEditor
