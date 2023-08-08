import react from 'react';
import './App.css';
import CohortFilter from './Components/CohortFilter';
import Home from './Components/Home';





function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Student Dashboard</h1>
      </div>
    <div className="content">
      <CohortFilter />
      <Home />
    </div>
    </div>
  );
}

export default App;
