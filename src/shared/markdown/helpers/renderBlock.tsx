import React from 'react'
import { Editor as CoreEditor } from 'slate'
import { RenderBlockProps } from 'slate-react'
import { BlockBlockQuote } from '../components/BlockBlockQuote'
import { BlockBulletedList } from '../components/BlockBulletedList'
import { BlockCode } from '../components/BlockCode'
import { BlockHeadingOne } from '../components/BlockHeadingOne'
import { BlockHeadingTwo } from '../components/BlockHeadingTwo'
import { BlockListItem } from '../components/BlockListItem'
import { BlockNumberedList } from '../components/BlockNumberedList'

export const renderBlock = (
  props: RenderBlockProps,
  editor: CoreEditor,
  next: () => any
) => {
  switch (props.node.type) {
    case 'block-quote':
      return <BlockBlockQuote {...props} />
    case 'bulleted-list':
      return <BlockBulletedList {...props} />
    case 'code':
      return <BlockCode {...props} />
    case 'heading-one':
      return <BlockHeadingOne {...props} />
    case 'heading-two':
      return <BlockHeadingTwo {...props} />
    case 'list-item':
      return <BlockListItem {...props} />
    case 'numbered-list':
      return <BlockNumberedList {...props} />
    default:
      return next()
  }
}
