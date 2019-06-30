import { app } from 'firebase/app'
import { httpsCallable } from 'rxfire/functions'
import { ASIA_NORTHEAST1 } from '../constants/region'
import { UpdateNoteData } from './types/updateNoteData'
import { UpdateNoteResult } from './types/updateNoteResult'

export const updateNote = () => {
  return httpsCallable<UpdateNoteData, UpdateNoteResult>(
    app().functions(ASIA_NORTHEAST1),
    'updateNote'
  )
}
