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
      <CohortList setSelectedCohort={setSelectedCohort} />
      <StudentList selectedCohort={selectedCohort} />
    </div>
  );
}

export default App;
