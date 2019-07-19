import { CompositeDecorator } from 'draft-js'
import { heddingDecorator } from './headingDecorator'
import { strongDecorator } from './strongDecorator'

export const decorator = new CompositeDecorator([
  heddingDecorator,
  strongDecorator
])
