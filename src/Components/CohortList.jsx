import React from 'react';

function CohortList({ setSelectedCohort }) {
  const cohorts = [
    { code: 'All Students', label: 'All Students', color: '#FF33B4' },
    { code: 'Winter2026', label: 'Winter 2026', color: '#FF5733' },
    { code: 'Fall2026', label: 'Fall 2026', color: '#33FF57' },
    { code: 'Summer2026', label: 'Summer 2026', color: '#5733FF' },
    { code: 'Spring2026', label: 'Spring 2026', color: '#FF33A0' },
    { code: 'Winter2025', label: 'Winter 2025', color: '#33A0FF' },
    { code: 'Fall2025', label: 'Fall 2025', color: '#A0FF33' },
    { code: 'Summer2025', label: 'Summer 2025', color: '#A033FF' },
    { code: 'Spring2025', label: 'Spring 2025', color: '#33FFA0' },
  ];

  // Sort cohorts in descending order
  cohorts.sort((a, b) => b.code.localeCompare(a.code));

  return (
    <div className="cohort-list">
      <h2>Cohorts</h2>
      <ul>
        {cohorts.map(cohort => (
          <li
            key={cohort.code}
            onClick={() => setSelectedCohort(cohort.code)}
            style={{ backgroundColor: cohort.color }}
          >
            {cohort.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CohortList;
