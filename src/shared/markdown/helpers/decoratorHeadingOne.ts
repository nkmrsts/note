import { DraftDecorator } from 'draft-js'
import TextHeadingOne from '../TextHeadingOne'

export const decoratorHeadingOne: DraftDecorator = {
  strategy: (block, callback) => {
    const text = block.getText()
    if (text.startsWith('# ')) {
      callback(0, text.length)
    }
  },
  component: TextHeadingOne
}
