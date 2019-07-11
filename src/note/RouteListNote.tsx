import { Divider, List } from '@material-ui/core'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import DivProgress from '../shared/components/DivProgress'
import DrawerDefault from '../shared/components/DrawerDefault'
import DrawerHeader from '../shared/components/DrawerHeader'
import { Note } from '../shared/firestore/types/note'
import { watchNotes } from '../shared/firestore/watchNotes'
import ListItemNote from './components/ListItemNote'
import ListItemNoteCreate from './components/ListItemNoteCreate'
import ListSearch from './components/ListSearch'

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

  const [search, setSearch] = useState('')

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

  const _notes = notes.filter(note => note.title.includes(search))

  return (
    <DrawerDefault>
      <DrawerHeader isMine={isMine} setIsMine={setIsMine} noteId={noteId} />
      <Divider />
      {isMine && <ListSearch searchState={[search, setSearch]} />}
      <List>
        {isMine && <ListItemNoteCreate onCreateNote={onCreateNote} />}
        {loading && <DivProgress />}
        {_notes.map(note => (
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
