import React from 'react';
import StudentDetails from './StudentDetails';


export default function StudentCard({ student }) {
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
        setShowDetails(!showDetails);
};

const formatFullName = (names) => {
    const { preferredName, middleName, surname } = names;
    const middleInitial = middleName ? `${middleName.charAt(0)}.` : '';
    return `${preferredName} ${middleInitial} ${surname}`;
}
const formatDOB = (dob) => {
    const date = new Date(dob);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


return (
    <li className="student-card">
        <div>
            <img src={student.profilePhoto} alt={student.names.preferredName} />
            <p>{formatFullName(student.names)}</p>
            <p>{student.username}</p>
            <p>{formatDOB(student.dob)}</p>
            <p>Notes: {student.notes.length}</p>
            <button onClick={toggleDetails}>{showDetails ? 'Hide' : 'Show'} Details</button>
        </div>    
            {showDetails && <StudentDetails student={student} />}
    </li>
);
}