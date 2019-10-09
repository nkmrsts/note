import { auth } from 'firebase/app'

export const signIn = () => {
  const provider = new auth.GoogleAuthProvider()
  auth().signInWithRedirect(provider)
}
