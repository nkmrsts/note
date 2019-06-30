import { CustomClaims } from './customClaims'
import { Doc } from './doc'
import { Owner } from './owner'

export type Note = Doc & {
  clapCount: number
  isPublic: boolean
  owner: Owner<CustomClaims>
  ownerId: string
  tagNames: string[]
  text: string
  title: string
}
