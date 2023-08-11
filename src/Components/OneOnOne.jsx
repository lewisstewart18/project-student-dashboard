import React, { useState } from 'react';

function OneOnOne({ student }) {
  const [notes, setNotes] = useState([]);
  const [commenter, setCommenter] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    if (commenter.trim() === '' || comment.trim() === '') {
      return; // Prevent adding empty note
    }

    const newNote = {
      commenter: commenter,
      comment: comment
    };

    setNotes([...notes, newNote]);
    setCommenter('');
    setComment('');
  };

  return (
    <div className="one-on-one">
      <h4>1-on-1 Notes</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="commenter">Commenter:</label>
          <input
            type="text"
            id="commenter"
            value={commenter}
            onChange={(e) => setCommenter(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p><strong>{note.commenter}:</strong> {note.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OneOnOne;
