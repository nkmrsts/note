import React, { Fragment,useState } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';

import './App.css';

interface Note {
  text: string,
  id: number
}

const App: React.FC = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState<Note[]>([])
  const [currentNote, setCurrentNote] = useState(1)

  const handleChange = (text: string) =>{
    setText(text)
    onUpDate(currentNote)
  }
  const onUpDate = (id:number) => {
    if(items.length === 0) {
      setItems([{ text, id }])
    }else {
      const index = items.findIndex(item => item.id === id)
      const _items = [...items]
      _items[index] = {..._items[index], text}
      setItems(_items)
    }
  }
  const onAdd = () => {
    setCurrentNote(items.length + 1)
    setItems([...items, { text:'', id: items.length + 1 }])
    setText('')
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
                  <IconButton edge="end" aria-label="Delete">
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
