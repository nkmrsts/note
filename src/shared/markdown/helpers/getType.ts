export const getType = (chars: string) => {
  switch (chars) {
    case '*':
    case '-':
    case '+':
      return 'list-item'
    case '>':
      return 'block-quote'
    default:
      return 'paragraph'
  }
}
