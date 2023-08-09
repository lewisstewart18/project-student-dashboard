import React from 'react';

function AdditionalDetails({ student }) {
  return (
    <div className="additional-details">
      <h4>Additional Details</h4>
      <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
      <p>Projects: {student.cohort.scores.projects * 100}%</p>
      <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
      <p>Resume: {student.certifications.resume ? '✅' : '❌'}</p>
      <p>LinkedIn: {student.certifications.linkedin ? '✅' : '❌'}</p>
      <p>GitHub: {student.certifications.github ? '✅' : '❌'}</p>
      <p>Mock Interview: {student.certifications.mockInterview ? '✅' : '❌'}</p>
    </div>
  );
}

export default AdditionalDetails;
