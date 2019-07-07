import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Note } from '../../shared/firestore/types/note'
import { updateNote } from '../../shared/functions/updateNote'
import ButtonPreview from './ButtonPreview'
import ButtonStatus from './ButtonStatus'
import ButtonUpdate from './ButtonUpdate'
import DivNoteEditorLayout from './DivNoteEditorLayout'
import DivNotePreview from './DivNotePreview'
import DivToolbarItem from './DivToolbarItem'
import InputBaseNoteText from './InputBaseNoteText'
import TextFieldTitle from './TextFieldTitle'
import ToolbarNote from './ToolbarNote'

type Props = { note: Note }

const DivNoteEditor: FunctionComponent<Props> = ({ note: _note }) => {
  const [note, setNote] = useState<Note>(_note)

  const [inProgress, setInProgress] = useState(false)

  const [preview, setPreview] = useState(true)

  const classes = useStyles()

  // update note
  useEffect(() => {
    if (!inProgress) return
    if (!note) return
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
          <ButtonPreview
            disabled={inProgress}
            preview={preview}
            setPreview={setPreview}
          />
        </DivToolbarItem>
        <DivToolbarItem>
          <ButtonUpdate
            disabled={inProgress}
            onUpdate={() => setInProgress(true)}
          />
        </DivToolbarItem>
        <DivToolbarItem>
          <ButtonStatus
            disabled={inProgress}
            setIsPublic={isPublic => setNote({ ...note, isPublic })}
            isPublic={note.isPublic}
          />
        </DivToolbarItem>
      </ToolbarNote>
      {preview ? (
        <DivNotePreview note={note} />
      ) : (
        <DivNoteEditorLayout>
          <TextFieldTitle
            inProgress={inProgress}
            setTitle={title => setNote({ ...note, title })}
            title={note.title}
          />
          <InputBaseNoteText
            inProgress={inProgress}
            setText={text => setNote({ ...note, text })}
            text={note.text}
          />
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
      gridGap: spacing(4),
      paddingBottom: spacing(4),
      paddingLeft: spacing(2),
      paddingRight: spacing(2)
    }
  }
})

export default DivNoteEditor
