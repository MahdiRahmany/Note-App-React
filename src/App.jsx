import { useReducer, useState } from "react";
import "./App.css";
import NoteHeader from "./components/NoteHeader";
import AddNewNote from "./components/AddNewNote";
import NoteStatus from "./components/NoteStatus";
import NoteList from "./components/NoteList";

function notesReducer(notes, action) {
  switch (action.type) {
    case "add": {
      return [...notes, action.payload];
    }
    case "delete": {
      return notes.filter((note) => note.id !== action.payload);
    }
    case "complete": {
      return notes.map((note) => 
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }

    default:
      throw new Error("unknown Error" + action.type);
  }
}

function App() {
  const [notes, dispatch] = useReducer(notesReducer, []);
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "add", payload: newNote });
  };

  const handleDeleteNote = (id) => {
    // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    dispatch({ type: "delete", payload: id });
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "complete", payload: noteId });

    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );
  };

  return (
    <div className="container">
      <NoteHeader notes={notes} onSort={(e) => setSortBy(e.target.value)} />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
