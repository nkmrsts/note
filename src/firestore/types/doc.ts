import { firestore } from 'firebase/app'

export type Doc = {
  createdAt: firestore.Timestamp
  id: string
  updatedAt: firestore.Timestamp | null
}
