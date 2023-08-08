import React from 'react';

export default function CohortFilter({ cohorts, selectedCohort, onSelectCohort }) {
  return (
    <div className="cohort-filter">
      <h2>Cohort</h2>
      <ul>
        {cohorts.map((cohort) => (
          <li
            key={cohort}
            className={selectedCohort === cohort ? 'active' : ''}
            onClick={() => onSelectCohort(cohort)}
          >
            {cohort}
          </li>
        ))}
      </ul>
    </div>
  );
}
