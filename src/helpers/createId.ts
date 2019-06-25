import { firestore } from 'firebase/app'

export const createId = () => {
  return firestore()
    .collection('path')
    .doc().id
}
