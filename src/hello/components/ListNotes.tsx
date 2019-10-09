import { List } from '@material-ui/core'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { useHistory } from 'react-router-dom'
import { useAuthUser } from '../../auth/useAuthUser'
import DivProgress from '../../components/DivProgress'
import ListItemNote from '../../components/ListItemNote'
import ListItemNoteCreate from '../../components/ListItemNoteCreate'
import { Note } from '../../firestore/types/note'
import { watchNotes } from '../../firestore/watchNotes'

const ListNotes: FunctionComponent = () => {
  const history = useHistory()

  const [authUser] = useAuthUser()

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
      {Boolean(authUser) && isMine && (
        <ListItemNoteCreate onCreateNote={onCreateNote} />
      )}
      {loading && <DivProgress />}
      {notes
        .filter(
          note => note.ownerId === (authUser && authUser.uid) || note.isPublic
        )
        .map(note => (
          <ListItemNote
            key={note.id}
            note={note}
            onUpdateNote={() => onUpdateNote(note.id)}
          />
        ))}
    </List>
  )
}

export default ListNotes
