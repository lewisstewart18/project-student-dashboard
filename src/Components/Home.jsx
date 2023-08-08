import React, { useState } from 'react';
import StudentList from './StudentList';


const Home = () => {
    const [isGridView, setIsGridView] = useState(false);
    const toggleGridView = () => {
        setIsGridView(!isGridView);
    }

    return (
       
            <div className={`home ${isGridView ? 'grid-view' : 'list-view'}`}>
                <button onClick={toggleGridView}>
                    {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
                </button>
                <StudentList />
            </div>
    );
}

export default Home;