import React, {useState} from 'react';
import Footer from './footer';
import Note from './note';
import Header from './header';
//import notes from '../notes';
import CreateArea from "./CreateArea";

function App(){
  const [notes, setNotes] = useState([]);
  let key=0;

  function addNote(title, content){
    key++;
    let newNote={
      key: key,
      title: title,
      content: content
    }
    setNotes((prevValue) => {
      return [...prevValue, newNote]
    })
  }

  return(
    <div>
    <Header />
    <CreateArea addNote={addNote}/>
    {notes.map(note => (<Note key={note.key} title={note.title} content={note.content} />))}

    <Footer />
    </div>
      );
}

export default App;
