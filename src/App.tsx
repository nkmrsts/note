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
import AddBoxIcon from '@material-ui/icons/AddBox'
import './App.css';

const App: React.FC = () => {
  const [text, setText] = useState('')
  const [currentNote, setCurrentNote] = useState(0)
  const [items, setItems] = useState<Array<string>>([])

  const handleChange = (text: string) =>{
    setText(text)
    onUpDate(text,currentNote)
  }
  const onUpDate = (text:string,index:number) => {
    const _items = [...items]
    _items[index] = text
    setItems(_items)
  }
  const onAdd = () => {
    setCurrentNote(items.length)
    setItems([...items, ''])
    setText('')
  }
  const onDelete = (index:number) => {
    const _items = [...items]
    _items.splice(index, 1)
    setItems(_items)
    if(currentNote === index) {
      setCurrentNote(0)
      setText(_items[0])
    }
  }
  const onSelect = (index:number) => {
    if(currentNote === index) return
    setCurrentNote(index)
    setText(items[index])
  }

  return (
    <Fragment>
      <Container maxWidth="md">
        <Box display="flex">
          <Box flex="0 1 50%">
            <p>リスト</p>
            <List>
              {items.map((value,index)=> (
              <ListItem style={{ cursor: 'pointer'}} key={index} divider onClick={()=>onSelect(index)}>
                <ListItemText style={{ flex: '0 0 auto', marginRight: '10px' }} primary={`No.${index}`}/>
                <ListItemText primary={value} secondary="日付" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="Delete" onClick={()=>onDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              ))}
            </List>
          </Box>
          <Box flex="0 1 50%">
            <Box display="flex">
              <p>表示してるノート No.{currentNote}</p>
              <IconButton edge="end" aria-label="Add" onClick={onAdd}>
                <AddBoxIcon />
              </IconButton>
            </Box>
            <TextField value={text} onChange={e=>handleChange(e.target.value)} fullWidth multiline rows="10" variant="outlined" />
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
