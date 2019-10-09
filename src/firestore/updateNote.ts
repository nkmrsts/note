import { auth, firestore } from 'firebase/app'
import { authState } from 'rxfire/auth'
import { of, throwError } from 'rxjs'
import { first, mergeMap } from 'rxjs/operators'
import { Value } from 'slate'
import { NOTES } from './constants/collection'

export const updateNote = ({
  noteId,
  value
}: {
  noteId: string
  value: Value
}) => {
  const noteRef = firestore()
    .collection(NOTES)
    .doc(noteId)

  const valueDocument = value.toJSON().document

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

  const title = blockNode.nodes
    .map(node => {
      return node.object === 'text' ? node.text : ''
    })
    .join('')

  return authState(auth()).pipe(
    first(),
    mergeMap(user => {
      if (!user) {
        return throwError('unauthenticated')
      }
      return noteRef.update({
        updatedAt: firestore.FieldValue.serverTimestamp(),
        value: value.toJSON(),
        tagNames: [],
        title
      })
    })
  )
}
