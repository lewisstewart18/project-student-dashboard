import react from 'react';
import { render } from 'react-dom';
import { studentData } from './data/Data.json';

function readJsonFile (studentData) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsText(studentData);
    });
}

function formattedName (studentData.names) {
    return studentData.map((student.names) => {
        return formattedName =`${preferredName + middleName.Char[0] + surname};`
    });
}

function age Filter (studentData) {
    return studentData.map((student) => {
        return student.age;
    });
}

return (
    <div>
        <h1>All Students</h1>
    </div>
    <div>
    <ul>
        {studentData.map((student) => {
            return <li key={student.id}>{student.profilePhoto, student.username, {formattedName(student.names)}, student.dob}</li>
        })}
    </ul>
    <button className="showMore">Show More </button>
    <button className="hideDetails" style={display: hidden}>Hide Details</button>
</div>
)