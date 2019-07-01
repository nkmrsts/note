import { auth, firestore } from 'firebase/app'
import { authState } from 'rxfire/auth'
import { collectionData } from 'rxfire/firestore'
import { mergeMap } from 'rxjs/operators'
import { NOTES } from './constants/collection'
import { DESC } from './constants/order'
import { Note } from './types/note'

export const watchNotes = ({ isMine }: { isMine: boolean }) => {
  if (isMine) {
    return authState(auth()).pipe(
      mergeMap(state => {
        if (!state) {
          return collectionData<Note>(
            firestore()
              .collection(NOTES)
              .orderBy('updatedAt', DESC)
          )
        }
        return collectionData<Note>(
          firestore()
            .collection(NOTES)
            .where('ownerId', '==', state.uid)
            .orderBy('updatedAt', DESC)
        )
      })
    )
  }

  return collectionData<Note>(
    firestore()
      .collection(NOTES)
      .orderBy('updatedAt', DESC)
  )
}
