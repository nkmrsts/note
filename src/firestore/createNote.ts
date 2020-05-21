import { auth, firestore } from 'firebase/app'
import { authState } from 'rxfire/auth'
import { throwError } from 'rxjs'
import { first, map, mergeMap } from 'rxjs/operators'
import { NOTES } from './constants/collection'

export const createNote = () => {
  const noteRef = firestore().collection(NOTES).doc()

  const noteId = noteRef.id

  return authState(auth()).pipe(
    first(),
    mergeMap((user) => {
      if (!user) {
        return throwError('unauthenticated')
      }
      return noteRef.set({
        id: noteId,
        createdAt: firestore.FieldValue.serverTimestamp(),
        updatedAt: firestore.FieldValue.serverTimestamp(),
        clapCount: 0,
        value: [
          {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
          },
        ],
        isPublic: false,
        owner: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        ownerId: user.uid,
        tagNames: [],
        title: '',
      })
    }),
    map(() => {
      return { noteId }
    })
  )
}
