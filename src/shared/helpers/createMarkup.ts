import { RawDraftContentState } from 'draft-js'
import marked from 'marked'

marked.setOptions({ breaks: true })

export const createMarkup = (contentState: RawDraftContentState) => {
  const text = contentState.blocks.map(block => block.text).join('\n')

  return { __html: marked(text) }
}
