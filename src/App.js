import {useState, useEffect } from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import NotesList from './components/NoteList';
import AddNote from './components/AddNote';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is me first note!',
      date: '15/04/2023' 
    },
    {
      id: nanoid(),
      text: 'This is me second note!',
      date: '20/04/2023' 
    },
    {
      id: nanoid(),
      text: 'This is me third note!',
      date: '23/04/2023' 
    },
    {
      id: nanoid(),
      text: 'This is my new note!',
      date: '30/04/2023' 
    }
]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);   
    setNotes(newNotes)
  }

  const [searchText, setSearchText] = useState ('');
  const [darkSide, setDarkSide] = useState (false);

  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes')
    );  

    if(savedNotes){
      setNotes(savedNotes)
    }
    
  }, []);


  useEffect(()=>{
    localStorage.setItem('react-notes', JSON.stringify(notes))
  }, [notes]);

  


  return (
    <>
    <div className= {`${darkSide && 'dark-side'}`}>
      <div className='container'>
        <Header handleDarkSide = {setDarkSide}/>
        <Search  handleSearchNote= {setSearchText} />
        <NotesList 
          notes = {notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote} 
          handleDeleteNote = {deleteNote}
        />

      </div>
    </div>
    </>
  );
}

export default App;
