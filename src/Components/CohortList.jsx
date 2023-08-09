import React from 'react';

function CohortList({ setSelectedCohort }) {
  // Assuming cohorts is an array of unique cohort codes from JSON data
  const cohorts = ['Winter2025', 'Winter2026', 'Summer2026', 'Spring2025', 'Fall2025', 'Spring2026', 'Fall2026'];

  return (
    <div className="cohort-list">
      <h2>Cohorts</h2>
      <ul>
        {cohorts.map(cohort => (
          <li key={cohort} onClick={() => setSelectedCohort(cohort)}>
            {cohort}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CohortList;
