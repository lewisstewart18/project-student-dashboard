import React, { useState } from 'react';
import AdditionalDetails from './AdditionalDetails';
import OneOnOne from './OneOnOne';

function StudentCard({ student }) {
  const [showDetails, setShowDetails] = useState(false);

  // Format the name
  const formattedName = `${student.names.preferredName} ${student.names.middleName ? student.names.middleName.charAt(0) + '.' : ''
    } ${student.names.surname}`;

  // Format the birthday
  const formattedBirthday = new Date(student.dob).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="student-card" style={{ borderLeft: `4px solid ${student.cohort.color}` }}>
      <div className="student-picture">
        <img src={student.profilePhoto} alt={formattedName} className="image" />
      </div>
      <div className="student-info">
        <h3>{formattedName}</h3>
        <p>Username: {student.username}</p>
        <p>Birthday: {formattedBirthday}</p>
        <p>On Track: {student.onTrack ? 'Yes' : 'No'}</p>
        <p>Notes Received: {student.notesReceived}</p>
      </div>
      <div className="student-details">
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div>
            <AdditionalDetails student={student} />
            <OneOnOne student={student} />
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentCard;
