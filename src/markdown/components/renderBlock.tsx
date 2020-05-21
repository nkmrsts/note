import React from 'react'
import { Editor as CoreEditor } from 'slate'
import { RenderElementProps } from 'slate-react'
import { BlockBlockQuote } from './BlockBlockQuote'
import { BlockCode } from './BlockCode'
import { BlockHeadingFive } from './BlockHeadingFive'
import { BlockHeadingFour } from './BlockHeadingFour'
import { BlockHeadingOne } from './BlockHeadingOne'
import { BlockHeadingThree } from './BlockHeadingThree'
import { BlockHeadingTwo } from './BlockHeadingTwo'
import { BlockListDisc } from './BlockListDisc'
import { BlockListItem } from './BlockListItem'
import { BlockParagraph } from './BlockParagraph'

export const renderBlock = (
  props: RenderElementProps,
  editor: CoreEditor,
  next: () => any
) => {
  switch (props.element.type) {
    case 'block-quote':
      return <BlockBlockQuote {...props} />
    case 'code':
      return <BlockCode {...props} />
    case 'heading-five':
      return <BlockHeadingFive {...props} />
    case 'heading-four':
      return <BlockHeadingFour {...props} />
    case 'heading-one':
      return <BlockHeadingOne {...props} />
    case 'heading-three':
      return <BlockHeadingThree {...props} />
    case 'heading-two':
      return <BlockHeadingTwo {...props} />
    case 'list-disc':
      return <BlockListDisc {...props} />
    case 'list-item':
      return <BlockListItem {...props} />
    default:
      return <BlockParagraph {...props} />
  }
}
