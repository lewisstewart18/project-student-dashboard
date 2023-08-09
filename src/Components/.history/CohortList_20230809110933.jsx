import React, { useState } from 'react';

export default function CohortFilter({ cohorts, selectedCohort, onSelectCohort }) {
    const [currentSelectedCohort, setSelectedCohort] = useState(selectedCohort);

    const selectCohort = (cohort) => {
        setSelectedCohort(cimport React from 'react';
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
        ohort);
        onSelectCohort(cohort);
    };

    const formatCohortName = (cohortCode) => {
        const [season, year] = cohortCode.split('-');
        return `${season.charAt(0).toUpperCase()}${season.slice(1)} ${year}`;
    }

    return (
        <div className="cohort-filter">
            <h2>Cohorts</h2>
            <ul>
                {cohorts.map((cohortCode) => (
                    <li
                        key={cohortCode}
                        className={currentSelectedCohort === cohortCode ? 'active' : ''}
                        onClick={() => selectCohort(cohortCode)}
                    >
                        {formatCohortName(cohortCode)}
                    </li>
                ))}
            </ul>
        </div>
    );
}
