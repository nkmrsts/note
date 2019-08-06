import React, { Fragment, FunctionComponent, memo, useEffect } from 'react'

const descriptionDom = document.querySelector<HTMLMetaElement>(
  'meta[name="description"]'
)
const descriptionDefault = descriptionDom ? descriptionDom.content : ''

const titleDefault = document.title

type Props = {
  title?: string | null
  description?: string | null
  image?: string | null
}

const FragmentHead: FunctionComponent<Props> = ({
  title = null,
  description = null,
  image = null
}) => {
  const _title = title ? `${title} | ${titleDefault}` : titleDefault
  const _description = description || descriptionDefault
  const _image = image || ''

  useEffect(() => {
    if (!document || !document.head) return

    document.title = _title

    const metaHtmlCollection = Array.from(document.head.children)

    for (const meta of metaHtmlCollection) {
      const name = meta.getAttribute('name')

      if (name && name.includes('description')) {
        meta.setAttribute('content', _description)
      }

      if (name && name.includes('twitter:card')) {
        meta.setAttribute('content', 'summary')
      }

      if (name && name.includes('twitter:site')) {
        meta.setAttribute('content', '@ankokushinwa')
      }

      const property = meta.getAttribute('property')

      if (property && property.includes('og:description')) {
        meta.setAttribute('content', _description)
      }

      if (property && property.includes('og:image')) {
        meta.setAttribute('content', _image)
      }

      if (property && property.includes('og:title')) {
        meta.setAttribute('content', _title)
      }

      if (property && property.includes('og:url')) {
        meta.setAttribute('content', window.location.href)
      }
    }
  }, [_description, _title, _image])

  return <Fragment />
}

export default memo(FragmentHead)
