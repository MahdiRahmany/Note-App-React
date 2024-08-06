import { useState } from "react";

function NoteHeader({ notes, sortBy, onSort }) {
  return (
    <div className="note-header">
      <h1>My Note ({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">sort based on latest notes</option>
        <option value="earliest">sort based on earliest notes</option>
        <option value="completed">sort based on completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
