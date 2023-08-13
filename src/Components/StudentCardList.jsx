import React from 'react';
import studentsData from '../data/data.json';

function StudentCardList({ students, gridView }) {
    return (
        <div className={`student-card-list ${gridView ? 'grid-view' : 'list-view'}`}>
            {students.map(student => (
                <div
                    key={student.id}
                    className="student-card-list-item"
                    style={{ borderLeft: `4px solid ${student.cohort.color}` }}
                >
                    <div className="student-list-info">
                        <p>Name: {student.names.preferredName} {student.names.surname}</p>
                        <p>Email: {student.username}</p>
                        <p>Cohort: {student.cohort.cohortCode}</p>
                        <p>On Track: {student.onTrack ? 'Yes' : 'No'}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StudentCardList;
