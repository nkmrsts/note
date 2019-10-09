import { auth } from 'firebase/app'
import { from } from 'rxjs'

export const updateProfile = (profile: {
  displayName?: string | null
  photoURL?: string | null
}) => {
  const currentUser = auth().currentUser

  if (!currentUser) {
    throw new Error('')
  }

  return from(currentUser.updateProfile(profile))
}
