import React from 'react';
import studentsData from '../data/data.json';
import StudentCard from './StudentCard';

function StudentList({ selectedCohort }) {
  const filteredStudents = selectedCohort
    ? studentsData.filter(student => student.cohort.cohortCode === selectedCohort)
    : studentsData;
  const headingText = selectedCohort ? `${selectedCohort} Students` : 'All Students';
  const studentCount = selectedCohort ? filteredStudents.length : studentsData.length;

  return (
    <div>
      <div className="student-list-heading">
        <h2>{headingText} ({studentCount})</h2>
      </div>
      <div className="student-list">
        {filteredStudents.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
