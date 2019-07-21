import { List } from '@material-ui/core'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import DivProgress from '../../shared/components/DivProgress'
import ListItemNote from '../../shared/components/ListItemNote'
import ListItemNoteCreate from '../../shared/components/ListItemNoteCreate'
import { Note } from '../../shared/firestore/types/note'
import { watchNotes } from '../../shared/firestore/watchNotes'

type Props = RouteComponentProps

const ListNotes: FunctionComponent<Props> = ({ history }) => {
  const [isMine] = useState(true)

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
    const subscription = watchNotes({ isMine }).subscribe(_notes => {
      setNotes(_notes)
      setLoading(false)
    })
    return () => subscription.unsubscribe()
  }, [isMine])

  return (
    <List>
      {isMine && <ListItemNoteCreate onCreateNote={onCreateNote} />}
      {loading && <DivProgress />}
      {notes.map(note => (
        <ListItemNote
          key={note.id}
          note={note}
          onUpdateNote={() => onUpdateNote(note.id)}
        />
      ))}
    </List>
  )
}

export default withRouter(ListNotes)
