import marked from 'marked'

marked.setOptions({ breaks: true })
export const createMarkup = (text: string) => {
  return { __html: marked(text) }
}
