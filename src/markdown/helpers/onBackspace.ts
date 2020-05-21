export const onBackspace: any = (event: any, editor: any) => {
  const { value } = editor

  const { selection, startBlock } = value

  if (selection.isExpanded) {
    return
  }

  if (selection.start.offset !== 0) {
    return
  }

  if (startBlock.type === 'paragraph') {
    return
  }

  event.preventDefault()

  editor.setBlocks('paragraph')

  console.log(startBlock.type)

  if (startBlock.type === 'list-item') {
    editor.unwrapBlock('list-disc')
  }
}
