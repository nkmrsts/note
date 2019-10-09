import { isKeyHotkey } from 'is-hotkey'
import { EventHook } from 'slate-react'

export const createPluginMark = (
  key: string,
  type: string
): {
  onKeyDown: EventHook
} => {
  return {
    onKeyDown: (event: any, editor, next) => {
      if (!isKeyHotkey(key)(event)) return next()

      event.preventDefault()

      editor.toggleMark(type)
    }
  }
}
