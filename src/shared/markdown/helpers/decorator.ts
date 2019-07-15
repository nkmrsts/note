import { CompositeDecorator } from 'draft-js'
import { heddingDecorator } from './headingDecorator'

export const decorator = new CompositeDecorator([heddingDecorator])
