import { Editor } from 'slate'
import { EventHook } from 'slate-react'
import { onBackspace } from './onBackspace'
import { onEnter } from './onEnter'
import { onSpace } from './onSpace'

export const onKeyDown: EventHook = (
  event: any,
  editor: Editor,
  next: () => any
) => {
  if (event.key.includes('Arrow')) {
    return next()
  }

  switch (event.key) {
    case ' ':
      return onSpace(event, editor, next)
    case 'Backspace':
      return onBackspace(event, editor, next)
    case 'Enter':
      return onEnter(event, editor, next)
  }

  return next()
}
