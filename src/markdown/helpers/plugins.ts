import { createPluginMark } from './createPluginMark'

export const plugins = [
  createPluginMark('mod+b', 'bold'),
  createPluginMark('mod+i', 'italic'),
  createPluginMark('mod+~', 'strikethrough'),
  createPluginMark('mod+u', 'underline')
]
