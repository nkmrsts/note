import { firestore } from 'firebase/app'
import { collectionData } from 'rxfire/firestore'
import { NOTES } from './constants/collection'
import { DESC } from './constants/order'
import { Note } from './types/note'

export const watchNotes = () => {
  const notesRef = firestore()
    .collection(NOTES)
    .orderBy('createdAt', DESC)

  return collectionData<Note>(notesRef)
}
