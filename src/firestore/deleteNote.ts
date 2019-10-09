import { firestore } from 'firebase/app'
import { from } from 'rxjs'
import { NOTES } from './constants/collection'

export const deleteNote = (noteId: string) => {
  const noteRef = firestore()
    .collection(NOTES)
    .doc(noteId)

  return from(noteRef.delete())
}
