import { firestore } from 'firebase/app'

export const systemFields = (id: string) => {
  const now = firestore.Timestamp.now()

  return {
    createdAt: now,
    id,
    updatedAt: now
  }
}
