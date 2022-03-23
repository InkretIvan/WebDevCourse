import React from 'react';
import Footer from './footer';
import Note from './note';
import Header from './header';
import notes from '../notes';

function App(){
  return(
    <div>
    <Header />
    {console.log(notes)}
    {notes.map(note => (<Note key={note.key} title={note.title} content={note.content} />))}
    <Footer />
    </div>
      );
}

export default App;
