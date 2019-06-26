import { firestore } from 'firebase/app'
import { docData } from 'rxfire/firestore'
import { mapNullable } from '../operators/mapNullable'
import { mergeMapNonNullable } from '../operators/mergeMapNonNullable'
import { NOTES } from './constants/collection'
import { Note } from './types/note'

export const watchNote = (noteId: string) => {
  return docData<Note>(
    firestore()
      .collection(NOTES)
      .doc(noteId)
  ).pipe(
    mapNullable(),
    mergeMapNonNullable()
  )
}
