import { firestore } from 'firebase/app'
import { from } from 'rxjs'
import { createId } from '../helpers/createId'
import { NOTES } from './constants/collection'
import { systemFields } from './helpers/systemFields'
import { CreateNoteData } from './types/createNoteData'
import { Note } from './types/note'

export const createNote = (data: CreateNoteData) => {
  return from(_createNote(data))
}

export const _createNote = async (data: CreateNoteData) => {
  const noteId = createId()

  const note: Note = {
    ...systemFields(noteId),
    isPublic: false,
    text: '',
    title: ''
  }

  const noteRef = firestore()
    .collection(NOTES)
    .doc(noteId)

  await noteRef.set(note)

  return { noteId: noteId }
}
