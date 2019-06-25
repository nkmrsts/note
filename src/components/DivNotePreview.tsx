import React, { FunctionComponent } from 'react'
import { Note } from '../firestore/types/note'
import { createMarkup } from '../helpers/createMarkup'

type Props = { note: Note }

const DivNotePreview: FunctionComponent<Props> = ({ note }) => {
  return <div dangerouslySetInnerHTML={createMarkup(note.text)} />
}

export default DivNotePreview
