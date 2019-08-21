export const getBlockType = (text: string) => {
  if (text.startsWith('#####')) {
    return 'heading-five'
  }

  if (text.startsWith('####')) {
    return 'heading-four'
  }

  if (text.startsWith('###')) {
    return 'heading-three'
  }

  if (text.startsWith('##')) {
    return 'heading-two'
  }

  if (text.startsWith('#')) {
    return 'heading-one'
  }

  if (text.startsWith('-')) {
    return 'list-item'
  }

  if (text.startsWith('>')) {
    return 'block-quote'
  }

  return 'paragraph'
}
