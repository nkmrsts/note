import { firestore } from 'firebase/app'
import { from } from 'rxjs'
import { NOTES } from './constants/collection'
import { UpdateNoteData } from './types/updateNoteData'

export const updateNote = (data: UpdateNoteData) => {
  return from(_updateNote(data))
}

export const _updateNote = async (data: UpdateNoteData) => {
  const noteRef = firestore()
    .collection(NOTES)
    .doc(data.noteId)

  await noteRef.update({
    text: data.text,
    title: data.title
  })

  return { noteId: data.noteId }
}
