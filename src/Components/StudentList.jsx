import react from 'react';
import { render } from 'react-dom';
import StudentCard from './StudentCard';

export default StudentList = ({ students }) => {
    return (
        <div className="student-list">
            <h2>All Students</h2>
            <ul>
                {students.map(student => (<StudentCard key={student.id} student={student} />))}
            </ul>
        </div>
    );
};