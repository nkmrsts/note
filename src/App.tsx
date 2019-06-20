import React, { Fragment,useState } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import './App.css';



const App: React.FC = () => {
  const [text,setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setText(e.target.value)
  }
  return (
    <Fragment>
      <Container maxWidth="md">
        <TextField value={text} onChange={handleChange} fullWidth multiline rows="10" variant="outlined" />
        <p>{text}</p>
      </Container>
    </Fragment>
  );
}

export default App;
