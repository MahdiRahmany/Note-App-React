import Message from "./Message";

function NoteStatus({ notes }) {
  
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const uncompletedNotes = allNotes - completedNotes;

  if (!allNotes) return <Message>
    <span>Not any notes to show</span>
  </Message>;

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{uncompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
