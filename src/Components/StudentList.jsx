import React, { useState } from 'react';
import studentsData from '../data/data.json';
import StudentCard from './StudentCard';

function StudentList({ selectedCohort }) {
  const [isGridView, setIsGridView] = useState(true); // Track the view mode

  const filteredStudents = selectedCohort
    ? studentsData.filter(student => student.cohort.cohortCode === selectedCohort)
    : studentsData;

  const toggleViewMode = () => {
    setIsGridView(prevState => !prevState);
  };

  const headingText = selectedCohort ? `${selectedCohort} Students` : 'All Students';
  const studentCount = selectedCohort ? filteredStudents.length : studentsData.length;

  return (
    <div>
      <div className="student-list-heading">
        <h2>
          {headingText} ({studentCount})
        </h2>
        <button onClick={toggleViewMode}>
          {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
        </button>
      </div>
      <div className={`student-list ${isGridView ? 'grid-view' : 'list-view'}`}>
        {filteredStudents.map(student => (
          <StudentCard key={student.id} student={student} gridView={isGridView} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
