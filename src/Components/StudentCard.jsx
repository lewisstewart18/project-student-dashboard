import React, { useState } from 'react';
import AdditionalDetails from './AdditionalDetails';
import OneOnOne from './OneOnOne';

function StudentCard({ student }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="student-card">
      <img src={student.profilePhoto} alt={student.names.preferredName} />
      <h3>{student.names.preferredName} {student.names.surname}</h3>
      <p>Username: {student.username}</p>
      <p>Birthday: {student.dob}</p>
      <p>On Track: {student.onTrack ? 'Yes' : 'No'}</p>
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
  );
}

export default StudentCard;
