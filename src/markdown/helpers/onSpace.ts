import { getBlockType } from './getBlockType'

export const onSpace = (event: any, editor: any) => {
  const { value } = editor

  const { selection, startBlock } = value

  if (selection.isExpanded) {
    return
  }

  const blockType = getBlockType(startBlock.text)

  if (blockType === 'list-item' && startBlock.type === 'list-item') {
    return
  }

  if (blockType === 'list-item') {
    editor.wrapBlock('list-disc')
  }

  editor.setBlocks(blockType)
}
