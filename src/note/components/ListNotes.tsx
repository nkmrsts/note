import { List, Typography } from '@material-ui/core'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Note } from '../../shared/firestore/types/note'
import { watchNotes } from '../../shared/firestore/watchNotes'
import ListItemNote from './ListItemNote'
import ListItemNoteCreate from './ListItemNoteCreate'

type Props = RouteComponentProps & {
  isMine: boolean
  noteId: string | null
}

const ListNotes: FunctionComponent<Props> = ({ isMine, history, noteId }) => {
  const [loading, setLoading] = useState(true)

  const [notes, setNotes] = useState<Note[]>([])

  const onCreateNote = useCallback(
    (_noteId: string) => {
      history.push(`/${_noteId}`)
    },
    [history]
  )

  const onDeleteNote = useCallback(
    (_noteId: string) => {
      if (noteId === _noteId) {
        history.push('/')
      }
    },
    [history, noteId]
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
      {loading && <Typography>{'読み込み中...'}</Typography>}
      {notes.map(note => (
        <ListItemNote
          key={note.id}
          note={note}
          onDeleteNote={() => onDeleteNote(note.id)}
          onUpdateNote={() => onUpdateNote(note.id)}
          selected={noteId === note.id}
        />
      ))}
    </List>
  )
}

export default withRouter(ListNotes)