import React, { useState } from 'react';
import Header from './Header';
import CohortList from './CohortList';
import StudentList from './StudentList';
import './App.css';

function App() {
  const [selectedCohort, setSelectedCohort] = useState(null);

  return (
    <div className="App">
      import React, { useState } from 'react';

      <CohortList setSelectedCohort={setSelectedCohort} />
      <StudentList selectedCohort={selectedCohort} />
    </div>
  );
}

export default App;
