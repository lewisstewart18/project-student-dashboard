import React, { useState } from 'react';
import students from '../data/data.json';

function isOnTrack(codewars, certifications) {
    const isResumeCertified = certifications.resume;
    const isLinkedInCertified = certifications.linkedin;
    const isGitHubCertified = certifications.github;
    const isMockInterviewCertified = certifications.mockInterview;
    const isCodewarsOver600 = codewars.current.total > 600;
  
    if (
      isResumeCertified &&
      isLinkedInCertified &&
      isGitHubCertified &&
      isMockInterviewCertified &&
      isCodewarsOver600
    ) {
      return 'On Track';
    } else {
      return 'Off Track';
    }
  }
  

export default function StudentDetails({ student }) {
  const { codewars, certifications, cohort, github, linkedin, twitter, website} = student;

  const [notes, setNotes] = useState([]);
  const [isOn, setIsOn] = useState(isOnTrack(codewars, certifications));
  const [commenter, setCommenter] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commenter && comment) {
      const newNote = { commenter, comment };
      setNotes([...notes, newNote]);
      setCommenter('');
      setComment('');
    }
  };

  return (
    <div className="student-details">
      <h3>Additional Details</h3>
      <div>
        <p>Codewars Total Score: {codewars.current.total}</p>
        <p>On-Track Status: {isOn}</p>
        <p>Cohort: {cohort.cohortCode}</p>
        <p>Assignment Score: {cohort.scores.assignments}</p>
        <p>Assessment Scores: {cohort.scores.assessments}</p>
        <p>Project Scores: {cohort.scores.projects}</p>
        <p>Github: {github}</p>
        <p>LinkedIn: {linkedin}</p>
        <p>Twitter: {twitter}</p>
        <p>Website: {website}</p>
      </div>
<h3>Add Notes</h3>
<form onSubmit={handleSubmit}>
  <label>Commenter Name:</label>
  <input type="text" name="commenterName" value={commenter} onChange={(e) => setCommenter(e.target.value)} />
  <label>Comment:</label>
  <textarea name="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
  <button type="submit">Add Notes</button>
</form>

<div className="notes-list">
  <h4>Notes</h4>
  <ul>
    {notes.map((note, index) => (
      <li key={index}>
        <p>{note.commenter}</p>
        <p>{note.comment}</p>
      </li>
    ))}
  </ul>
</div>
</div>
);
}