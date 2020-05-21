import { Node } from 'slate'
import { CustomClaims } from './customClaims'
import { Doc } from './doc'
import { Owner } from './owner'

export type Note = Doc & {
  clapCount: number
  value: Node[]
  isPublic: boolean
  owner: Owner<CustomClaims>
  ownerId: string
  tagNames: string[]
  title: string
}
