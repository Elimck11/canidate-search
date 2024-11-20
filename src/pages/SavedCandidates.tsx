import { useState, useEffect } from 'react';

const SavedCandidates = () => {

  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  useEffect(() => {
    // Load saved candidates from localStorage
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(saved);
  }, []);

  return (
    <>
      <h1>Saved Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No candidates saved yet.</p>
      ) : (
        <ul>
          {savedCandidates.map((candidate: any, index: number) => (
            <li key={index}>
              <img src={candidate.avatar} alt={candidate.username} width={50} />
              <h3>{candidate.username}</h3>
              <p>{candidate.location || "No location provided"}</p>
              <p>{candidate.email || "No email provided"}</p>
              <p>{candidate.company || "No company provided"}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SavedCandidates;

