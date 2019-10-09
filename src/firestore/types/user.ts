import { Doc } from './doc'

export type User = Doc & {
  description: string
  displayName: string
  noteCount: number
  photoURL: string
}
