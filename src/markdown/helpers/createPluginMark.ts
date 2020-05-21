import { isKeyHotkey } from 'is-hotkey'

export const createPluginMark = (
  key: string,
  type: string
): {
  onKeyDown: any
} => {
  return {
    onKeyDown: (event: any, editor: any, next: any) => {
      if (!isKeyHotkey(key)(event)) return next()

      event.preventDefault()

      editor.toggleMark(type)
    },
  }
}
