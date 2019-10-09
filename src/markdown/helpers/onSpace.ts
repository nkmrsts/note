import { EventHook } from 'slate-react'
import { getBlockType } from './getBlockType'

export const onSpace: EventHook = (event, editor, next) => {
  const { value } = editor

  const { selection, startBlock } = value

  if (selection.isExpanded) {
    return next()
  }

  const blockType = getBlockType(startBlock.text)

  if (blockType === 'list-item' && startBlock.type === 'list-item') {
    return next()
  }

  if (blockType === 'list-item') {
    editor.wrapBlock('list-disc')
  }

  editor.setBlocks(blockType)
}
