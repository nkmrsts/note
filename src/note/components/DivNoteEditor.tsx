import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Editor } from '../../shared/enums/editor'
import { Note } from '../../shared/firestore/types/note'
import { updateNote } from '../../shared/functions/updateNote'
import ButtonDelete from './ButtonDelete'
import ButtonGroupPanel from './ButtonGroupPanel'
import ButtonStatus from './ButtonStatus'
import ButtonUpdate from './ButtonUpdate'
import DivMarkdownEditor from './DivMarkdownEditor'
import DivNoteEditorLayout from './DivNoteEditorLayout'
import DivNotePreview from './DivNotePreview'
import DivNotePreviewContent from './DivNotePreviewContent'
import DivToolbarItem from './DivToolbarItem'
import InputBaseNoteText from './InputBaseNoteText'
import TextFieldTitle from './TextFieldTitle'
import ToolbarNote from './ToolbarNote'

type Props = { note: Note }

const DivNoteEditor: FunctionComponent<Props> = ({ note: _note }) => {
  const [note, setNote] = useState<Note>(_note)

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
      isPublic: note.isPublic,
      noteId: note.id,
      text: note.text,
      title: note.title
    }).subscribe(() => {
      setInProgress(false)
    })
    return () => subscription.unsubscribe()
  }, [inProgress, note])

  return (
    <div className={classes.root}>
      <ToolbarNote>
        <DivToolbarItem>
          <ButtonUpdate
            disabled={inProgress}
            editableState={[editable, setEditable]}
            onUpdate={() => setInProgress(true)}
          />
        </DivToolbarItem>
        {!editable && (
          <DivToolbarItem>
            <ButtonStatus
              disabled={inProgress}
              setIsPublic={isPublic => setNote({ ...note, isPublic })}
              isPublic={note.isPublic}
            />
          </DivToolbarItem>
        )}
        {!editable && (
          <DivToolbarItem>
            <ButtonDelete noteId={note.id} />
          </DivToolbarItem>
        )}
        {editable && (
          <DivToolbarItem>
            <ButtonGroupPanel editorState={[editor, setEditor]} />
          </DivToolbarItem>
        )}
      </ToolbarNote>
      {!editable && <DivNotePreview note={note} />}
      {editable && (
        <DivNoteEditorLayout>
          <TextFieldTitle
            inProgress={inProgress}
            setTitle={title => setNote({ ...note, title })}
            title={note.title}
          />
          <DivMarkdownEditor preview={editor}>
            {editor !== Editor.Preview && (
              <InputBaseNoteText
                inProgress={inProgress}
                setText={text => setNote({ ...note, text })}
                text={note.text}
              />
            )}
            {editor !== Editor.Input && (
              <DivNotePreviewContent text={note.text} />
            )}
          </DivMarkdownEditor>
        </DivNoteEditorLayout>
      )}
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: {
      display: 'grid',
      gridAutoRows: 'min-content auto',
      gridGap: spacing(2),
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

export default DivNoteEditor
