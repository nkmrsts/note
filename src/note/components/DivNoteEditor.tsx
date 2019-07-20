import { makeStyles, Theme, Typography } from '@material-ui/core'
import { EditorState } from 'draft-js'
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import Markdown from '../../shared/markdown/Markdown'

type Props = {
  editorState: EditorState
  inProgress: boolean
  setEditorState: Dispatch<SetStateAction<EditorState>>
}

const DivNoteEditor: FunctionComponent<Props> = ({
  editorState,
  inProgress,
  setEditorState
}) => {
  const classes = useStyles()

  return (
    <Typography className={classes.root} component={'div'}>
      <Markdown editorState={editorState} setEditorState={setEditorState} />
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
