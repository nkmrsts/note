import { DraftDecorator } from 'draft-js'
import TypographyStrong from '../TypographyStrong'

export const strongDecorator: DraftDecorator = {
  strategy: (block, callback) => {
    const text = block.getText()
    if (text.match(/\*\*.*\*\*/)) {
      callback(0, text.length)
    }
  },
  component: TypographyStrong
}
