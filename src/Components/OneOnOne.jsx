import React, { useState } from 'react';

function OneOnOne({ student }) {
  const [notes, setNotes] = useState([]);
  const [commenter, setCommenter] = useState('');
  const [comment, setComment] = useState('');

  const addNote = () => {
    const newNote = { commenter, comment };
    setNotes([...notes, newNote]);
    setCommenter('');
    setComment('');
  };

  return (
    <div className="one-on-one">
      <h4>1-on-1 Notes</h4>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <strong>{note.commenter}: </strong>{note.comment}
          </li>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input
          type="text"
          placeholder="Commenter"
          value={commenter}
          onChange={e => setCommenter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default OneOnOne;
