import { DraftDecorator } from 'draft-js'
import TextHeadingTwo from '../TextHeadingTwo'

export const decoratorHeadingTwo: DraftDecorator = {
  strategy: (block, callback) => {
    const text = block.getText()
    if (text.startsWith('## ')) {
      callback(0, text.length)
    }
  },
  component: TextHeadingTwo
}
