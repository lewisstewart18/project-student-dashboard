import react from 'react';
import { render } from 'react-dom';
import StudentList from './StudentList';
import CohortFilter from './CohortFilter';


export default Home = () => {
    return(
        <div className="home">
            <CohortFilter />
            <StudentList />
        </div>
    )
}