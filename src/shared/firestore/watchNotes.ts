import { firestore } from 'firebase/app'
import { collectionData } from 'rxfire/firestore'
import { NOTES } from './constants/collection'
import { Note } from './types/note'

export const watchNotes = () => {
  const notesRef = firestore().collection(NOTES)

  return collectionData<Note>(notesRef)
}
