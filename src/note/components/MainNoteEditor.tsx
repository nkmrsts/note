import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Editor } from '../../shared/enums/editor'
import { Note } from '../../shared/firestore/types/note'
import { updateNote } from '../../shared/functions/updateNote'
import { toContentState } from '../../shared/markdown/helpers/toContentState'
import { toEditorState } from '../../shared/markdown/helpers/toEditorState'
import DivColumnNote from '../../shared/components/DivColumnNote'
import DivNoteEditor from './DivNoteEditor'
import IconButtonDelete from './IconButtonDelete'
import IconButtonPreview from './IconButtonPreview'
import IconButtonStatus from './IconButtonStatus'
import IconButtonUpdate from './IconButtonUpdate'
import ToolbarNote from '../../shared/components/ToolbarNote'
import TypographyNote from './TypographyNote'

type Props = { note: Note }

const MainNoteEditor: FunctionComponent<Props> = ({ note }) => {
  const [editorState, setEditorState] = useState(() => {
    return toEditorState(note.contentState)
  })

  const [inProgress, setInProgress] = useState(false)

  const [editable, setEditable] = useState(false)

  const [editor, setEditor] = useState<Editor>(Editor.Input)

  const classes = useStyles()

  // update note
  useEffect(() => {
    if (!inProgress) return
    setEditable(false)
    const subscription = updateNote()({
      noteId: note.id,
      contentState: toContentState(editorState)
    }).subscribe(() => {
      setInProgress(false)
    })
    return () => subscription.unsubscribe()
  }, [editorState, inProgress, note.id])

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
      <DivColumnNote editable={editable} preview={editor}>
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
      </DivColumnNote>
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
