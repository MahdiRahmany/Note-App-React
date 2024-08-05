function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const options = {
    month: "short",
    year: "numeric",
    day: "numeric",
  };
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="description">{note.description}</p>
        </div>
        <div className="actions">
          <button>❌</button>
          <input type="checkbox" />
        </div>
      </div>
      <div className="note-footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
