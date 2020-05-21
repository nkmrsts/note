import { onBackspace } from './onBackspace'

export const onEnter: any = (event: any, editor: any) => {
  const { value } = editor

  const { selection, startBlock } = value

  const { start, end, isExpanded } = selection

  if (isExpanded) {
    return
  }

  if (start.offset === 0 && startBlock.text.length === 0) {
    return onBackspace(event, editor)
  }

  if (end.offset !== startBlock.text.length) {
    return
  }

  if (
    startBlock.type !== 'heading-one' &&
    startBlock.type !== 'heading-two' &&
    startBlock.type !== 'heading-three' &&
    startBlock.type !== 'heading-four' &&
    startBlock.type !== 'heading-five' &&
    startBlock.type !== 'heading-six' &&
    startBlock.type !== 'block-quote'
  ) {
    return
  }

  event.preventDefault()

  editor.splitBlock().setBlocks('paragraph')
}
