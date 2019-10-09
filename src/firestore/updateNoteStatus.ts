import { firestore } from 'firebase/app'
import { from } from 'rxjs'
import { NOTES } from './constants/collection'

export const updateNote = ({
  noteId,
  isPublic
}: {
  noteId: string
  isPublic: boolean
}) => {
  const noteRef = firestore()
    .collection(NOTES)
    .doc(noteId)

  return from(
    noteRef.update({
      updatedAt: firestore.FieldValue.serverTimestamp(),
      isPublic
    })
  )
}
