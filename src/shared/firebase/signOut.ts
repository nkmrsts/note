import { auth } from 'firebase/app'

export const signOut = () => {
  auth().signOut()
}
