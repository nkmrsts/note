import { auth, firestore } from 'firebase/app'
import { authState } from 'rxfire/auth'
import { throwError } from 'rxjs'
import { first, mergeMap } from 'rxjs/operators'
import { Node } from 'slate'
import { NOTES } from './constants/collection'

export const updateNote = ({
  noteId,
  value,
}: {
  noteId: string
  value: Node[]
}) => {
  const noteRef = firestore().collection(NOTES).doc(noteId)

  /*
  const valueDocument = value

  if (!valueDocument) {
    return of()
  }

  if (!valueDocument.nodes) {
    return of()
  }

  const [blockNode] = valueDocument.nodes

  if (blockNode.object !== 'block') {
    return of()
  }

  if (!blockNode.nodes) {
    return of()
  }
  */

  const title = 'title'

  return authState(auth()).pipe(
    first(),
    mergeMap((user) => {
      if (!user) {
        return throwError('unauthenticated')
      }
      return noteRef.update({
        updatedAt: firestore.FieldValue.serverTimestamp(),
        value,
        tagNames: [],
        title,
      })
    })
  )
}
