import React from 'react';
import StudentCard from './StudentCard';

const StudentList = ({ students }) => {
    return (
        <div className="student-list">
            <h2>All Students</h2>
            <ul>
                {students.map(student => (<StudentCard key={student.id} student={student} />))}
            </ul>
        </div>
    );
};

export default StudentList;