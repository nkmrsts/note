import { DraftDecorator } from 'draft-js'
import TextStrong from '../TextStrong'

export const decoratorStrong: DraftDecorator = {
  strategy: (block, callback) => {
    const text = block.getText()
    if (text.match(/\*\*.*\*\*/)) {
      callback(0, text.length)
    }
  },
  component: TextStrong
}
