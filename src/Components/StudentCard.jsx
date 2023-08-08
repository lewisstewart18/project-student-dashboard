import react from 'react';
import { render } from 'react-dom';
import StudentDetails from './StudentDetails';


export default function StudentCard({ student }) {
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
        setShowDetails(!showDetails);
};

return (
    <li className="student-card">
        <div>
            <img src={student.ptofilePhoto} alt={student.names.preferredName} />
            <p>{student.names.preferredName}</p>
            <p>{student.username}</p>
            <p>{student.dob}</p>
            <button onClick={toggleDetails}>{showDetails ? 'Hide' : 'Show'} Details</button>
        </div>    
            {showDetails && <StudentDetails student={student} />}
    </li>
);
}