import React from 'react';

function CohortList({ setSelectedCohort }) {
  const cohorts = [
    { code: 'All Students', label: 'All Students' },
    { code: 'Winter2026', label: 'Winter 2025' },
    { code: 'Fall2026', label: 'Fall 2026' },
    { code: 'Summer2026', label: 'Summer 2026' },
    { code: 'Spring2026', label: 'Spring 2026' },
    { code: 'Winter2025', label: 'Winter 2025' },
    { code: 'Fall2025', label: 'Fall 2025' },
    { code: 'Summer2025', label: 'Summer 2026' },
	{ code: 'Spring2025', label: 'Spring 2025' },
  ];

  return (
    <div className="cohort-list">
      <h2>Cohorts</h2>
      <ul>
        {cohorts.map(cohort => (
          <li key={cohort.code} onClick={() => setSelectedCohort(cohort.code)}>
            {cohort.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CohortList;
