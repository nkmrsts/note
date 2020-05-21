import { KeyboardEventHandler } from 'react'
import { Editor } from 'slate'
import { onBackspace } from './onBackspace'
import { onEnter } from './onEnter'
import { onSpace } from './onSpace'

export const onKeyDown = (editor: Editor): KeyboardEventHandler => {
  return (event) => {
    if (event.key.includes('Arrow')) {
      return
    }

    switch (event.key) {
      case ' ':
        return onSpace(event, editor)
      case 'Backspace':
        return onBackspace(event, editor)
      case 'Enter':
        return onEnter(event, editor)
    }

    return
  }
}
