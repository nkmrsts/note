import { makeStyles, Theme } from '@material-ui/core'
import { convertToRaw, EditorState } from 'draft-js'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Editor } from '../../shared/enums/editor'
import { Note } from '../../shared/firestore/types/note'
import { updateNote } from '../../shared/functions/updateNote'
import { toEditorState } from '../../shared/markdown/helpers/toEditorState'
import DivColumnTwo from './DivColumnTwo'
import DivNoteEditor from './DivNoteEditor'
import IconButtonDelete from './IconButtonDelete'
import IconButtonPreview from './IconButtonPreview'
import IconButtonStatus from './IconButtonStatus'
import IconButtonUpdate from './IconButtonUpdate'
import ToolbarNote from './ToolbarNote'
import TypographyNote from './TypographyNote'

type Props = { note: Note }

const MainNoteEditor: FunctionComponent<Props> = ({ note }) => {
  console.log(note.id)

  const [editorState, setEditorState] = useState<EditorState>(() =>
    toEditorState(note.contentState)
  )

  const [inProgress, setInProgress] = useState(false)

  const [editable, setEditable] = useState(false)

  const [editor, setEditor] = useState<Editor>(Editor.Input)

  const classes = useStyles()

  // update note
  useEffect(() => {
    if (!inProgress) return
    if (!note) return
    setEditable(false)
    const subscription = updateNote()({
      noteId: note.id,
      contentState: convertToRaw(editorState.getCurrentContent())
    }).subscribe(() => {
      setInProgress(false)
    })
    return () => subscription.unsubscribe()
  }, [editorState, inProgress, note])

  return (
    <main className={classes.root}>
      <ToolbarNote>
        {!editable && <IconButtonStatus note={note} />}
        {editable && (
          <IconButtonDelete disabled={inProgress} noteId={note.id} />
        )}
        {editable && <IconButtonPreview editorState={[editor, setEditor]} />}
        <IconButtonUpdate
          disabled={inProgress}
          editableState={[editable, setEditable]}
          onUpdate={() => setInProgress(true)}
        />
      </ToolbarNote>
      <DivColumnTwo editable={editable} preview={editor}>
        {(!editable || editor !== Editor.Input) && (
          <TypographyNote note={note} editorState={editorState} />
        )}
        {editable && editor !== Editor.Preview && (
          <DivNoteEditor
            inProgress={inProgress}
            setEditorState={setEditorState}
            editorState={editorState}
          />
        )}
      </DivColumnTwo>
    </main>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      paddingBottom: spacing(4),
      paddingLeft: spacing(2),
      paddingRight: spacing(2)
    },
    inputContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: spacing(2)
    },
    previewContent: {
      borderLeft: '1px solid rgba(0,0,0,0.12)',
      paddingLeft: spacing(2)
    }
  }
})

export default MainNoteEditor
