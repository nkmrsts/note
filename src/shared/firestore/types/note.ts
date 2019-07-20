import { RawDraftContentState } from 'draft-js'
import { CustomClaims } from './customClaims'
import { Doc } from './doc'
import { Owner } from './owner'

export type Note = Doc & {
  clapCount: number
  contentState: RawDraftContentState
  isPublic: boolean
  owner: Owner<CustomClaims>
  ownerId: string
  tagNames: string[]
  title: string
}
