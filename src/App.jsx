import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const handleNote = (newNote) => {
    setNotes((prevNote) => [...prevNote, newNote]);
  };

  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleNote} />
        <div className="note-container">
          <NoteList notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
