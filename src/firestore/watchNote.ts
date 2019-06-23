import { firestore } from 'firebase/app'
import { docData } from 'rxfire/firestore'
import { NOTES } from './constants/collection'
import { Note } from './types/note'

export const watchNote = (noteId: string) => {
  const noteRef = firestore()
    .collection(NOTES)
    .doc(noteId)

  return docData<Note>(noteRef)
}
