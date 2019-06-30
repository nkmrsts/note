import { Divider } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

type Props = {
  isMine: boolean
  setMine: (isMine: boolean) => void
}

const DivNoteFilter: FunctionComponent<Props> = ({ isMine, setMine }) => {
  return (
    <div>
      <button onClick={() => setMine(true)}>
        {`${isMine ? '>' : ''}あなたの`}
      </button>
      <button onClick={() => setMine(false)}>
        {`${!isMine ? '>' : ''}みんなの`}
      </button>
      <Divider />
    </div>
  )
}

export default DivNoteFilter
