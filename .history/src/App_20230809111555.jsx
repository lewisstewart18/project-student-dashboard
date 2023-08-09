import React from 'react';
import './App.css';
import CohortFilter from './Components/CohortFilter.jsx';
import Home from './Components/Home.jsx';





function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Student Dashboard</h1>
      </div>
      


      import React, { useState } from 'react';
import Header from './Header';
import CohortList from './CohortList';
import StudentList from './StudentList';
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
