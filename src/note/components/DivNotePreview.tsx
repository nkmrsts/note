import { makeStyles, Theme } from '@material-ui/core'
import React, { FunctionComponent, useMemo } from 'react'
import { createEditor, Node } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'
import { Note } from '../../firestore/types/note'

type Props = {
  note: Note
  value: Node[]
}

const DivNotePreview: FunctionComponent<Props> = ({ note, value }) => {
  const classes = useStyles()

  const editor = useMemo(() => withReact(createEditor()), [])

  return (
    <div className={classes.root}>
      <Slate editor={editor} readOnly value={value} onChange={() => null}>
        <Editable />
      </Slate>
    </div>
  )
}

const useStyles = makeStyles<Theme>(({ spacing, typography }) => {
  return {
    root: {
      fontFamily: typography.fontFamily,
      fontSize: '1.1rem',
      height: '100%',
      padding: spacing(2),
      width: '100%',
      wordBreak: 'break-word',
    },
  }
})

export default DivNotePreview
