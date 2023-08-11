import React, { useState } from 'react';
import Header from './components/Header';
import CohortList from './components/CohortList';
import StudentList from './components/StudentList';
import './App.css';

function App() {
const [selectedCohort, setSelectedCohort] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="cohorts-list">
          <CohortList setSelectedCohort={setSelectedCohort} />
        </div>
        <div className="student-list">
          <StudentList selectedCohort={selectedCohort} />
        </div>
      </div>
    </div>
  );
}

export default App;
