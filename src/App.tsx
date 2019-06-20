import React, { Fragment,useState } from 'react'
import './App.css';

const App: React.FC = () => {
  const [text,setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setText(e.target.value)
  }
  return (
    <Fragment>
      <div className="container">
      <textarea value={text} onChange={handleChange} />
      <p>{text}</p>
      </div>
    </Fragment>
  );
}

export default App;
