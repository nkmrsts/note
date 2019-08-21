import { EventHook } from 'slate-react'

export const onBackspace: EventHook = (event, editor, next) => {
  const { value } = editor

  const { selection, startBlock } = value

  if (selection.isExpanded) {
    return next()
  }

  if (selection.start.offset !== 0) {
    return next()
  }

  if (startBlock.type === 'paragraph') {
    return next()
  }

  event.preventDefault()

  editor.setBlocks('paragraph')

  console.log(startBlock.type)

  if (startBlock.type === 'list-item') {
    editor.unwrapBlock('list-disc')
  }
}
