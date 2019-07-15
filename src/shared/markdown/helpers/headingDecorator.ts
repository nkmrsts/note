import { DraftDecorator } from 'draft-js'
import TypographyHeadingOne from '../TypographyHeadingOne'

export const heddingDecorator: DraftDecorator = {
  strategy: (block, callback) => {
    const text = block.getText()
    if (text.includes('#')) {
      callback(0, text.length)
    }
  },
  component: TypographyHeadingOne
}
