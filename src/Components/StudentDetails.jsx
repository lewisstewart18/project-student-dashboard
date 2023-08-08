import react from 'react'


function isOnTrack(codewars, certifications) {
    const isResumeCertified = certifications.resume;
    const isLinkedInCertified = certifications.linkedin;
    const isGitHubCertified = certifications.github;
    const isMockInterviewCertified = certifications.mockInterview;
  
    const isCodewarsOver600 = codewars.current.total > 600;
  
    if (
      isResumeCertified &&
      isLinkedInCertified &&
      isGitHubCertified &&
      isMockInterviewCertified &&
      isCodewarsOver600
    ) {
      return 'On Track';
    } else {
      return 'Off Track';
    }
  }
  

export default function StudentDetails({ student }) {
    const {codewars, certifications, cohort, github, linkedin, name, twitter, website} = student

    return (
        <div className="student-details">
            <h3>Additional Details</h3>
            <p>Codewars Total Score: {codewars.current.total}</p>
            <p>On-Track Status: {isOnTrack(codewars, certifications)}</p>
            <p>Cohort: {cohort.cohortCode}</p>
            <p>Assignment Score: {cohort.scores.assignments}</p>
            <p>Assessment Scores: {cohort.scores.assessments}</p>
            <p>Project Scores: {cohort.scores.projects}</p>
            <p>Github: {github}</p>
            <p>LinkedIn: {linkedin}</p>
            <p>Twitter: {twitter}</p>
            <p>Website: {website}</p>
        </div>

    )
}