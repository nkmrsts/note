import { isKeyHotkey } from 'is-hotkey'
import { EventHook } from 'slate-react'

export const onKeyDown: EventHook = (event: any, editor, next) => {
  // sample
  if (event.key === '&') {
    event.preventDefault()
    editor.addMark('and')
  }

  if (isKeyHotkey('mod+b')(event)) {
    event.preventDefault()
    editor.toggleMark('bold')
  }

  if (isKeyHotkey('mod+i')(event)) {
    event.preventDefault()
    editor.toggleMark('italic')
  }

  if (isKeyHotkey('mod+u')(event)) {
    event.preventDefault()
    editor.toggleMark('underlined')
  }

  if (isKeyHotkey('mod+`')(event)) {
    event.preventDefault()
    editor.toggleMark('code')
  }

  return next()
}
