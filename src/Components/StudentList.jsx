import react from 'react';
import { render } from 'react-dom';
import StudentCard from './StudentCard';

export default StudentList = () => {
    return (
        <div>
            <h1>All Students</h1>
            <ul>
                <li>
                    <StudentCard />;
                </li>
            </ul>
        </div>
    );
};