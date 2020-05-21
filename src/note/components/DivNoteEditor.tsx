import { makeStyles, Theme } from '@material-ui/core'
import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useMemo,
} from 'react'
import { createEditor, Node } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'

type Props = {
  inProgress: boolean
  setValue: Dispatch<SetStateAction<Node[]>>
  value: Node[]
}

const DivNoteEditor: FunctionComponent<Props> = ({
  inProgress,
  setValue,
  value,
}) => {
  const classes = useStyles()

  const editor = useMemo(() => withReact(createEditor()), [])

  return (
    <div className={classes.root}>
      <Slate
        editor={editor}
        onChange={(_value) => setValue(_value)}
        value={value}
      >
        <Editable />
      </Slate>
    </div>
  )
}
const useStyles = makeStyles<Theme>(({ spacing, typography }) => {
  return {
    root: {
      background: 'rgba(0,0,0,0.06)',
      borderRadius: spacing(1),
      fontFamily: typography.fontFamily,
      fontSize: '1.1rem',
      padding: spacing(2),
      wordBreak: 'break-word',
    },
  }
})

export default DivNoteEditor
