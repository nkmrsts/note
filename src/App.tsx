import React, { Fragment,useState } from 'react'
import {
  Container,
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import './App.css';

interface Note {
  text: string,
  id: number
}

const App: React.FC = () => {
  const [text, setText] = useState('')
  const [currentNote, setCurrentNote] = useState(1)
  const [count, setcount] = useState(1)
  const [items, setItems] = useState([{
    text: '',
    id: count
  }])

  const handleChange = (text: string) =>{
    setText(text)
    onUpDate(text,currentNote)
  }
  const onUpDate = (text:string,id:number) => {
    const index = items.findIndex(item => item.id === id)
    const _items = [...items]
    _items[index] = {..._items[index], text}
    setItems(_items)
  }
  const onAdd = () => {
    setCurrentNote(count + 1)
    setItems([...items, { text:'', id: count + 1 }])
    setText('')
    setcount(count + 1)
  }
  const onDelete = (id:number) => {
    const _items = items.filter(item => item.id !== id)
    setItems(_items)
    if(currentNote === id) {
      setCurrentNote(1)
      setText('')
    }
  }
  const onSelect = (id:number) => {
    if(currentNote === id) return
    setCurrentNote(id)
    const index = items.findIndex(item => item.id === id)
    setText(items[index].text)
  }

  return (
    <Fragment>
      <Container maxWidth="md">
        <Box display="flex">
          <Box flex="0 1 50%">
            <p>リスト</p>
            <List>
              {items.map(item=> (
              <ListItem style={{ cursor: 'pointer'}} key={item.id} divider onClick={()=>onSelect(item.id)}>
                <ListItemText style={{ flex: '0 0 auto', marginRight: '10px' }} primary={`No.${item.id}`}/>
                <ListItemText primary={item.text} secondary="日付" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="Delete" onClick={()=>onDelete(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              ))}
            </List>
          </Box>
          <Box flex="0 1 50%">
            <p>表示してるノート No.{currentNote}</p>
            <button onClick={onAdd}>plus</button>
            <TextField value={text} onChange={e=>handleChange(e.target.value)} fullWidth multiline rows="10" variant="outlined" />
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
