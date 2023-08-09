import React from 'react';
import studentsData from './data.json'; // Import your JSON data
import StudentCard from './StudentCard';

function StudentList({ selectedCohort }) {
  const filteredStudents = studentsData.filter(student => student.cohort.cohortCode === selectedCohort);

  return (
    <div className="student-list">
      <h2>Students</h2>
      {filteredStudents.map(student => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
