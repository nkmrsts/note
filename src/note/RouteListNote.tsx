import { List, Typography } from '@material-ui/core'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import DrawerDefault from '../shared/components/DrawerDefault'
import { Note } from '../shared/firestore/types/note'
import { watchNotes } from '../shared/firestore/watchNotes'
import ListItemNote from './components/ListItemNote'
import ListItemNoteCreate from './components/ListItemNoteCreate'

type Props = RouteComponentProps<{ noteId: string }>

const RouteListNote: FunctionComponent<Props> = ({
  history,
  match: {
    params: { noteId }
  }
}) => {
  const [isMine, setIsMine] = useState(true)

  const [loading, setLoading] = useState(true)

  const [notes, setNotes] = useState<Note[]>([])

  const onCreateNote = useCallback(
    (_noteId: string) => {
      history.push(`/${_noteId}`)
    },
    [history]
  )

  const onUpdateNote = useCallback(
    (_noteId: string | null) => {
      history.push(`/${_noteId}`)
    },
    [history]
  )

  // watch notes
  useEffect(() => {
    setNotes([])
    const subscription = watchNotes({ isMine }).subscribe(_notes => {
      setNotes(_notes)
      setLoading(false)
    })
    return () => subscription.unsubscribe()
  }, [isMine])

  return (
    <DrawerDefault isMine={isMine} setIsMine={setIsMine} noteId={noteId}>
      <List>
        {isMine && <ListItemNoteCreate onCreateNote={onCreateNote} />}
        {loading && <Typography>{'読み込み中...'}</Typography>}
        {notes.map(note => (
          <ListItemNote
            key={note.id}
            note={note}
            onUpdateNote={() => onUpdateNote(note.id)}
            selected={noteId === note.id}
          />
        ))}
      </List>
    </DrawerDefault>
  )
}

export default withRouter(RouteListNote)
