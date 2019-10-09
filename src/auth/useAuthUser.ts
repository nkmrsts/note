import { auth, User } from 'firebase/app'
import { useEffect, useState } from 'react'
import { authState } from 'rxfire/auth'

export const useAuthUser = (): [User | null, boolean] => {
  const [authUser, setAuthUser] = useState<User | null>(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const subscription = authState(auth()).subscribe(_user => {
      setAuthUser(_user)
      setLoading(false)
    })
    return () => subscription.unsubscribe()
  }, [setAuthUser])

  return [authUser, loading]
}
