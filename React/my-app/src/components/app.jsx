import React, {useState} from 'react';
import Footer from './footer';
import Note from './note';
import Header from './header';
//import notes from '../notes';
import CreateArea from "./CreateArea";

function App(){
  const [notes, setNotes] = useState([]);
  const [key,setKey] = useState(1);

  function addNote(title, content){
    setKey((oldKey)=>{return oldKey+1;})
    let newNote={
      key: key,
      id: key,
      title: title,
      content: content
    }
    setNotes((prevValue) => {
      return [...prevValue, newNote]
    })
  }

  function deleteNote(NoteKey){
    setNotes((prevValue)=>{
      return prevValue.filter((note)=>{
        return note.id!==NoteKey;
      })
    })

  }

  return(
    <div>
    <Header />
    <CreateArea addNote={addNote}/>
    {console.log(notes)}
    {notes.map(note => (<Note key={note.key} id={note.key} title={note.title} content={note.content} deleteNote={deleteNote}/>))}

    <Footer />
    </div>
      );
}

export default App;
