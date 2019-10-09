import { List } from '@material-ui/core'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useAuthUser } from '../auth/useAuthUser'
import DivProgress from '../components/DivProgress'
import DrawerDefault from '../components/DrawerDefault'
import ListItemHeader from '../components/ListItemHeader'
import ListItemNote from '../components/ListItemNote'
import ListItemNoteCreate from '../components/ListItemNoteCreate'
import { Note } from '../firestore/types/note'
import { watchNotes } from '../firestore/watchNotes'
import ListItemNoteOwn from './components/ListItemNoteOwn'

type Props = {}

const RouteNoteSide: FunctionComponent<Props> = () => {
  const history = useHistory()

  const { noteId } = useParams<{ noteId: string }>()

  const [isMine, setIsMine] = useState(true)

  const [loading, setLoading] = useState(true)

  const [notes, setNotes] = useState<Note[]>([])

  const [search, setSearch] = useState('')

  const [authUser, authLoading] = useAuthUser()

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
    if (authLoading) return
    const subscription = watchNotes({
      isMine: authUser == null ? false : isMine
    }).subscribe(_notes => {
      setNotes(_notes)
      setLoading(false)
    })
    return () => subscription.unsubscribe()
  }, [authLoading, authUser, isMine])

  // user's notes
  if (authUser && isMine) {
    return (
      <DrawerDefault>
        <List>
          <ListItemHeader
            isMineState={[isMine, setIsMine]}
            searchState={[search, setSearch]}
          />
          <ListItemNoteCreate onCreateNote={onCreateNote} />
          {loading && <DivProgress />}
          {notes
            .filter(note => note.title.includes(search))
            .map(note => (
              <ListItemNoteOwn
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

  // all user's notes
  return (
    <DrawerDefault>
      <List>
        <ListItemHeader
          isMineState={[isMine, setIsMine]}
          searchState={[search, setSearch]}
        />
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
              selected={noteId === note.id}
            />
          ))}
      </List>
    </DrawerDefault>
  )
}

export default RouteNoteSide
