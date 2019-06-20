import React, { Fragment,useState } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import './App.css';

interface Note {
  text: string,
  id: number
}

const App: React.FC = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState<Note[]>([])
  const [currentNote, setCurrentNote] = useState(1)
  console.log(items)

  const handleChange = (text: string) =>{
    setText(text)
    onUpDate(currentNote)
  }
  const onUpDate = (id:number) => {
    if(items.length === 0) {
      setItems([...items, { text, id }])
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

  return (
    <Fragment>
      <Container maxWidth="md">
        <p>今表示してるノート No.{currentNote}</p>
        <button onClick={onAdd}>plus</button>
        <TextField value={text} onChange={e=>handleChange(e.target.value)} fullWidth multiline rows="10" variant="outlined" />
        <p>リスト</p>
        <ul>
          {items.map((item,i)=> (
            <li key={i}>
              <p>No.{item.id}</p>
              <p>本文:{item.text}</p>
              <p>日付</p>
            </li>
          ))}
        </ul>
      </Container>
    </Fragment>
  );
}

export default App;
