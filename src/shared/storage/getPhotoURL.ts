import { firestore, storage } from 'firebase/app'
import { getDownloadURL, put } from 'rxfire/storage'
import { filter, mergeMap } from 'rxjs/operators'

export const getPhotoURL = (file: File) => {
  // create uuid
  const fileId = firestore()
    .collection('collectionPath')
    .doc('documentPath').id

  const ref = storage().ref(fileId)

  return put(ref, file).pipe(
    filter(snapshot => snapshot.bytesTransferred === snapshot.totalBytes),
    mergeMap(() => getDownloadURL(ref))
  )
}
