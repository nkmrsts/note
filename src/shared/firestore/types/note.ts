import { Doc } from './doc'

export type Note = Doc & {
  isPublic: boolean
  text: string
  title: string
}
