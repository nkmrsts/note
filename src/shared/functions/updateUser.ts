import { app } from 'firebase/app'
import { httpsCallable } from 'rxfire/functions'
import { ASIA_NORTHEAST1 } from './constants/region'
import { UpdateUserData } from './types/updateUserData'
import { UpdateUserResult } from './types/updateUserResult'

export const updateUser = () => {
  return httpsCallable<UpdateUserData, UpdateUserResult>(
    app().functions(ASIA_NORTHEAST1),
    'updateUser'
  )
}
