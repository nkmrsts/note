import { EventHook } from 'slate-react'
import { onBackspace } from './onBackspace'

export const onEnter: EventHook = (event, editor, next) => {
  const { value } = editor

  const { selection, startBlock } = value

  const { start, end, isExpanded } = selection

  if (isExpanded) {
    return next()
  }

  if (start.offset === 0 && startBlock.text.length === 0) {
    return onBackspace(event, editor, next)
  }

  if (end.offset !== startBlock.text.length) {
    return next()
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
    return next()
  }

  event.preventDefault()

  editor.splitBlock().setBlocks('paragraph')
}
