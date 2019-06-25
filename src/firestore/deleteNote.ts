import { firestore } from 'firebase/app'
import { from } from 'rxjs'
import { NOTES } from './constants/collection'
import { DeleteNoteData } from './types/deleteNoteData'

export const deleteNote = (data: DeleteNoteData) => {
  const noteRef = firestore()
    .collection(NOTES)
    .doc(data.noteId)

  return from(noteRef.delete())
}
