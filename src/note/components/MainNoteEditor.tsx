import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useState } from 'react'
import { Value } from 'slate'
import DivColumnNote from '../../shared/components/DivColumnNote'
import ToolbarNote from '../../shared/components/ToolbarNote'
import { Editor } from '../../shared/enums/editor'
import { Note } from '../../shared/firestore/types/note'
import DivNoteEditor from './DivNoteEditor'
import DivNotePreview from './DivNotePreview'
import IconButtonDelete from './IconButtonDelete'
import IconButtonPreview from './IconButtonPreview'
import IconButtonStatus from './IconButtonStatus'
import IconButtonUpdate from './IconButtonUpdate'

type Props = { note: Note }

const MainNoteEditor: FunctionComponent<Props> = ({ note }) => {
  const [value, setValue] = useState(() => Value.fromJSON(note.value))

  const [progress, setProgress] = useState(false)

  const [editable, setEditable] = useState(false)

  const [editor, setEditor] = useState<Editor>(Editor.Input)

  const classes = useStyles()

  return (
    <main className={classes.root}>
      <ToolbarNote>
        {!editable && <IconButtonStatus note={note} />}
        {editable && <IconButtonDelete disabled={progress} noteId={note.id} />}
        {editable && <IconButtonPreview editorState={[editor, setEditor]} />}
        <IconButtonUpdate
          disabled={progress}
          editableState={[editable, setEditable]}
          noteId={note.id}
          progressState={[progress, setProgress]}
          value={value}
        />
      </ToolbarNote>
      <DivColumnNote editable={editable} preview={editor}>
        {(!editable || editor !== Editor.Input) && (
          <DivNotePreview note={note} value={value} />
        )}
        {editable && editor !== Editor.Preview && (
          <DivNoteEditor
            inProgress={progress}
            setValue={setValue}
            value={value}
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
