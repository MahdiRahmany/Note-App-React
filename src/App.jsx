import { useReducer, useState, useEffect } from "react";
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
    case "load": {
      return action.payload;
    }
    default:
      throw new Error("unknown Error " + action.type);
  }
}

function App() {
  const [notes, dispatch] = useReducer(notesReducer, []);

  const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      dispatch({ type: "load", payload: JSON.parse(storedNotes) });
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  const handleAddNote = (newNote) => {
    dispatch({ type: "add", payload: newNote });
  };

  const handleDeleteNote = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "complete", payload: noteId });
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
