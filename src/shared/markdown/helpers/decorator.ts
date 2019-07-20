import { CompositeDecorator } from 'draft-js'
import { decoratorHeadingOne } from './decoratorHeadingOne'
import { decoratorHeadingThree } from './decoratorHeadingThree'
import { decoratorHeadingTwo } from './decoratorHeadingTwo'
import { decoratorStrong } from './decoratorStrong'

export const decorator = new CompositeDecorator([
  decoratorHeadingOne,
  decoratorHeadingTwo,
  decoratorHeadingThree,
  decoratorStrong
])
